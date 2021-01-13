<template>
  <div class="app-brawlstars">
    <section>
      <h2>Composition API Component</h2>
      <div class="brawl-wrap" style="">
        <div class="brawl" v-html="brawlMe"></div>
        <div class="brawl" v-html="brawlContest"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'
import { useStore } from '../hooks/store'
import { BrawlstarsActionTypes } from '../store/brawlstars/action-types'

export default defineComponent({
  name: 'AppBrawlstars',
  setup () {
    const store = useStore()

    const brawlMe = ref(null)
    const brawlContest = ref(null)

    const formatForTemplate = function (html) {
      const stat = stringToHTML(html).querySelectorAll('div.container-fluid.content-container.px-0.py-0.mb-0 .post-type1')
      let profile = ''
      for (const el in stat) {
        removeHtmlElement(stat[el], 'script, link, noscript')

        stat[el].querySelectorAll('img').forEach(element => {
          if (element.getAttribute('data-cfsrc')) {
            element.src = element.getAttribute('data-cfsrc')
          }
          if (element.getAttribute('data-cfstyle')) {
            element.style = element.getAttribute('data-cfstyle') // + 'width: 200px; margin: auto;'
          }
        })
        profile += stat[el].innerHTML
      }
      return profile
    }

    onMounted(async () => {
      try {
        const resultLeft = await store.dispatch(`brawlstars/${BrawlstarsActionTypes.GET_BRAWLSTARS_PROFILE}`, 'PQJQ9L98U')
        const resultRight = await store.dispatch('brawlstars/' + BrawlstarsActionTypes.GET_BRAWLSTARS_PROFILE, '9VJYP289Q')
        brawlMe.value = formatForTemplate(resultLeft)
        brawlContest.value = formatForTemplate(resultRight)
      } catch (error: unknown) {
        console.log(error)
      }
    })

    return {
      brawlMe,
      brawlContest
    }
  }
})
</script>

<style lang="scss" scopped>
  @import '../assets/scss/brawlstars.scss';

.app-brawlstars {
  background: #0a0a0a;
}

.brawl-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width: 1050px) {
  .brawl-wrap {
    flex-wrap: wrap;
  }
}

.brawl {
  min-width: 50%;
  flex-shrink: 1;
  flex-grow: 1;
}

.font-weight-normal {
  display: flex !important;
}

.summary-box img:nth-child(2) {
  position: absolute;
  width: 50%;
}

.brl-top-l,
.brl-top-r,
.brl-btm-l,
.brl-btm-r {
  display: flex;

  img {
    width: 20px;
  }
}

.brl-top-l,
.brl-btm-l{
  left: 10%!important;
}

.brawl-wrap .container,
.brawl-wrap body {
  min-width: 280px!important;
}

.brawl-wrap .table td,
.brawl-wrap .table th {
  background-color: #1c1c1c!important;
}

.brawl-wrap .container,
.brawl-wrap body {
  min-width: 280px!important;
}

</style>
