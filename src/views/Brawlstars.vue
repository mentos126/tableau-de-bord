<template>
  <div class="app-brawlstars">
    <section>
      <div class="brawl-wrap" style="">
        <div class="brawl" v-html="brawlMe"></div>
        <div class="brawl" v-html="brawlContest"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'
import { useStore } from '../hooks/store'
import { ActionsTypes } from '../store'

export default defineComponent({
  name: 'AppBrawlstars',
  setup () {
    const store = useStore()

    const brawlMe = ref(null)
    const brawlContest = ref(null)

    const formatForTemplate = function (html) {
      const res = stringToHTML(html)
      const stat = res.querySelectorAll('div.container-fluid.content-container.px-0.py-0.mb-0 .post-type1')
      let profile = ''
      for (let el = 0; el < stat.length; el++) {
        removeHtmlElement(stat[el], 'script, link, noscript')

        stat[el].querySelectorAll('img').forEach(element => {
          if (element.getAttribute('data-cfsrc')) {
            element.src = element.getAttribute('data-cfsrc')
          }
          element.style = ''
          if (element.getAttribute('data-cfstyle')) {
            element.style = element.getAttribute('data-cfstyle')
          }
        })
        profile += stat[el].innerHTML
      }
      return profile
    }

    onMounted(async () => {
      try {
        const resultLeft = await store.dispatch(`brawlstars/${ActionsTypes.BrawlstarsActionTypes.GET_BRAWLSTARS_PROFILE}`, 'PQJQ9L98U')
        const resultRight = await store.dispatch(`brawlstars/${ActionsTypes.BrawlstarsActionTypes.GET_BRAWLSTARS_PROFILE}`, '9VJYP289Q')
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

.container.pt-3.pb-3 .row a {
  width: 33% !important;
  height: 33% !important;
  max-width: 200px !important;
  max-height: 200px !important;
  position: relative !important;
  flex: none !important;
}

.brl-top-l,
.brl-top-r,
.brl-btm-l,
.brl-btm-r {
  display: flex !important;

  img {
    width: 20px !important;
  }
}

// .brl-top-l,
// .brl-btm-l{
//   // left: 15%!important;
// }

// .brl-btm-l,
// .brl-btm-r{
//   // bottom: 20%!important;
// }

.brawl-wrap .table td,
.brawl-wrap .table th {
  background-color: #1c1c1c!important;
}

.brawl-wrap .container,
.brawl-wrap body {
  // min-width: 280px!important;
}

</style>
