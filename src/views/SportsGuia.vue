<template>
  <div class="app-sports-guia">
    <app-loader v-if="isLoading"></app-loader>
    <section v-else >
      <div class="bg-white w-full flex relative justify-around flex-wrap items-center mx-auto px-8 h-full">
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
      <div class="guia" v-html="guia"></div>
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
    const selected = ref('sport-tv1')
    const guia = ref(null)

    const selectedNav = channel => {
      return channel === selected.value ? 'bg-blue-600 text-white' : 'bg-gray-50 text-black'
    }

    const selectNav = channel => {
      selected.value = channel
      load()
    }

    const formatForTemplate = function (html) {
      const res = stringToHTML(html)
      let programs = ''
      const list = res.querySelectorAll('.channel_data')
      for (let el = 0; el < list.length; el++) {
        removeHtmlElement(list[el], 'span, br')
        programs += `
        <div class="item close ${list[el].style.background ? 'now' : ''}">
          <div class="title">
            ${list[el].children[0].innerHTML} - ${list[el].children[1].innerHTML}
          </div>
          <div class="description">
            ${list[el].children[2].innerHTML}
          </div>
        </div>
        `
      }
      return programs
    }

    const load = async () => {
      isLoading.value = true
      guia.value = null
      try {
        const result = await store.dispatch(`sportsGuia/${ActionsTypes.SportsGuiaActionTypes.GET_CHANNEL_GUIA}`, selected.value)
        guia.value = formatForTemplate(result)
      } catch (error: unknown) {
        console.log(error)
      }
      isLoading.value = false
      window.setTimeout(() => onClickItem(), 500)
    }

    const onClickItem = () => {
      const items = document.querySelectorAll('.item')
      items.forEach(item => {
        item.addEventListener('click', () => {
          const classes = item.classList
          if (classes.contains('close')) {
            classes.remove('close')
          } else {
            classes.add('close')
          }
        })
      })
    }

    onMounted(() => {
      load()
    })

    return {
      load,
      isLoading,
      selected,
      guia,
      sportsGuiaSelection,
      sportsGuiaSelectionTraduction,
      selectedNav,
      selectNav
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
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  width: 100%;
  max-width: 550px;
  box-shadow: 2px 2px 15px 0px #343434;
  margin: 10px;
  background: white;
  padding: 15px;
  border-radius: 10px;

  &.close:first-of-type,
  &:first-of-type {
    border-radius: 10px 10px 0 0;
    margin-top: 15px;
  }

  &.close:last-of-type,
  &:last-of-type {
    border-radius: 0 0 10px 10px;
    margin-bottom: 15px;
  }

  &.close {
    margin: 0;
    border-radius: 0;

    .description {
      display: none;
    }
  }
}

.item .hidden {
  display: block;
}

.item.now {
  background-color: rgba(248, 113, 113);
}
</style>
