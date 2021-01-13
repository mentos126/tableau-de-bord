<template>
  <div class="app-sudouestjob" v-html="sudOuestJob"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'

export default defineComponent({
  name: 'AppSudOuestJob',
  props: {
    html: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (props) {
    const { html } = toRefs(props)

    const sudOuestJob = ref()

    const tranformHtml = () => {
      const sudOuestJobBody = stringToHTML(html.value).querySelectorAll('.content.nocard.autonome .action.crushed.autonome.autopadding')
      console.log(sudOuestJobBody)
      let jobs = ''
      for (let el = 0; el < sudOuestJobBody.length; el++) {
        // removeHtmlElement(sudOuestJobBody[el], '.jobCardShelf, .tt_set')
        // data-original
        sudOuestJobBody[el].querySelectorAll('img').forEach(element => {
          if (element.getAttribute('data-original')) {
            element.src = element.getAttribute('data-original')
          }
        })

        // sudOuestJobBody[el].querySelectorAll('a').forEach(element => {
        //   if (element.getAttribute('href')) {
        //     element.href = 'https://fr.sudOuestJob.com' + element.getAttribute('href')
        //   }
        // })
        jobs += '<div class="item">' + sudOuestJobBody[el].innerHTML + '</div>'
      }
      sudOuestJob.value = jobs
    }

    watch(html, tranformHtml)

    onMounted(tranformHtml)

    return {
      sudOuestJob
    }
  }
})
</script>

<style lang="scss" scopped>
.app-sudouestjob {
  font-family: 'Noto Sans','Helvetica Neue',Helvetica,Arial,sans-serif !important;
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
}

.item {
  border: solid 2px rgb(80, 72, 72);
  padding: 15px 30px;
  width: 450px;
  min-height: 350px;
  max-width: 450px;
  margin: 2.5px;
  border-radius: 15px;
  position: relative;
}

.augmented.logo {
  width: 150px;
  height: 150px;
}
</style>
