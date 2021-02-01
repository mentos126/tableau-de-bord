<template>
  <div class="app-sports-guia">
    <app-loader v-if="isLoading"></app-loader>
    <section v-else >
      <div class="bg-white w-full flex relative justify-around flex-wrap items-center mx-auto px-8 h-full">
        <button
          type="button"
          class="inline-flex rounded-full px-4 m-1 p-2 rounded leading-none flex items-center"
          :class="selectedNav('now')"
          @click="selectNow()"
          >
            Agora
        </button>
        <button
          v-for="sportGuia in sportsGuiaSelection"
          :key="sportGuia"
          type="button"
          class="inline-flex rounded-full px-4 m-1 p-2 rounded leading-none flex items-center"
          :class="selectedNav(sportGuia)"
          @click="selectNav(sportGuia)"
          >
            {{ sportsGuiaSelectionTraduction[sportGuia] }}
        </button>
      </div>
      <div class="guia">
        <div
          v-for="(channel, index) in guia"
          :key="index"
          class="item channel"
          :class="{'now': channel.now, 'close': channel.close}"
          @click="channel.close = !channel.close"
          >
          <b v-if="selected == 'now'" class="channel key">{{ sportsGuiaSelectionTraduction[channel.key] }}</b>
          <br v-if="selected == 'now'">
          <b>{{ channel.hours }} - {{ channel.title }}</b>
          <br v-if="!channel.close">
          <div v-if="!channel.close" class="description">
            {{ channel.description }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'
import { sportsGuiaSelection, sportsGuiaSelectionTraduction } from '../constants'
import { useStore } from '../hooks/store'
import { ActionsTypes } from '../store'
import AppLoader from '../components/AppLoader.vue'

export default defineComponent({
  name: 'AppSportsGuia',
  components: {
    AppLoader
  },
  setup () {
    const store = useStore()
    const isLoading = ref(true)
    const selected = ref('now')
    const guia = ref([])

    const selectedNav = channel => {
      return channel === selected.value ? 'bg-blue-600 text-white' : 'bg-gray-50 text-black'
    }

    const selectNav = channel => {
      selected.value = channel
      load()
    }

    const selectNow = () => {
      selected.value = 'now'
      load()
    }

    const formatForSingle = function (html) {
      const res = stringToHTML(html)
      const programs = []
      const list = res.querySelectorAll('.channel_data')
      for (let el = 0; el < list.length; el++) {
        removeHtmlElement(list[el], 'span, br')
        programs.push({
          hours: list[el].children[0].firstChild.innerHTML,
          title: list[el].children[1].firstChild.innerHTML,
          description: list[el].children[2].innerHTML,
          now: list[el].style.background,
          close: true
        })
      }
      return programs
    }

    const formatForNow = html => {
      const res = stringToHTML(html)
      const list = res.querySelectorAll('.channel_data')

      for (let el = 0; el < list.length; el++) {
        if (list[el].style.background) {
          return {
            hours: list[el].querySelector('.icon-clock').parentElement.children[1].innerHTML,
            title: list[el].querySelector('.ml10.black_gray').innerHTML,
            description: list[el].querySelector('.channel_desc ').innerHTML,
            close: true,
            now: null
          }
        }
      }
    }

    const load = async () => {
      isLoading.value = true
      guia.value = []
      if (selected.value === 'now') {
        await loadNow()
      } else {
        await loadSingle()
      }
      isLoading.value = false
    }

    const loadSingle = async () => {
      try {
        const result = await store.dispatch(`sportsGuia/${ActionsTypes.SportsGuiaActionTypes.GET_CHANNEL_GUIA}`, selected.value)
        guia.value = formatForSingle(result)
      } catch (error: unknown) {
        console.log(error)
      }
    }

    const getNowData = async () => {
      const output = Object.entries(sportsGuiaSelection).map(([key, value]) => ({ key, value }))
      return Promise.all(output.map(({ value }) => {
        try {
          return {
            key: value,
            value: store.dispatch(`sportsGuia/${ActionsTypes.SportsGuiaActionTypes.GET_CHANNEL_GUIA}`, value)
          }
        } catch (error) {
          return {
            key: value,
            value: ''
          }
        }
      }))
    }

    const loadNow = async () => {
      const data = await getNowData()
      for (const datum of data) {
        const channel = await datum.value
        guia.value.push({
          key: datum.key,
          ...formatForNow(channel)
        })
      }
    }

    onMounted(() => { load() })

    return {
      load,
      isLoading,
      selected,
      guia,
      sportsGuiaSelection,
      sportsGuiaSelectionTraduction,
      selectedNav,
      selectNav,
      selectNow
    }
  }
})
</script>

<style lang="scss" scopped>
.app-sports-guia {
  min-width: 100%;
  min-height: 100%;
}

.guia {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.channel.key {
  color: rgb(173, 39, 39);
}

.item.channel {
  width: calc(100% - 20px);
  max-width: 550px;
  box-shadow: 2px 2px 15px 0px #343434;
  margin: 10px;
  background: white;
  padding: 15px;
  border-radius: 10px;

  &.close:first-of-type {
    border-radius: 10px 10px 0 0;
    margin-top: 15px;
  }

  &.close:last-of-type {
    border-radius: 0 0 10px 10px;
    margin-bottom: 15px;
  }

  &.close {
    margin: 0;
    border-radius: 0;
  }
}

.item .hidden {
  display: block;
}

.item.now {
  background-color: rgba(248, 113, 113);
}
</style>
