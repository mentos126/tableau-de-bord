<template>
  <div>
    <section>
      <h2>Composition API Component</h2>
      <div style="display: flex; flex-wrap: wrap;">
        <div v-html="brawlMe"></div>
        <div v-html="brawlContest"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { useStore } from '../hooks/store'
import { BrawlersMutationTypes } from '../store/brawlstars/mutations-types'
import { BrawlstarsActionTypes } from '../store/brawlstars/action-types'

export default defineComponent({
  name: 'AppBrawlstars',
  setup () {
    const store = useStore()

    const brawlMe = ref(null)
    const brawlContest = ref(null)

    const stringToHTML = function (str: string) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(str, 'text/html')
      return doc
    }

    const formatForTemplate = function (html) {
      const result = stringToHTML(html)
      let temp = ''
      const body = result.querySelectorAll('div.container-fluid.content-container.px-0.py-0.mb-0 .post-type1')
      for (const el of body) {
        let i = el.querySelectorAll('script')
        i.forEach(element => {
          element.parentNode.removeChild(element)
        })
        i = el.querySelectorAll('link')
        i.forEach(element => {
          element.parentNode.removeChild(element)
        })
        temp += el.innerHTML
      }
      return temp
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

<style lang="scss">
@import '../assets/css/brawlstars.css'
</style>
