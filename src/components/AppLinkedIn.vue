<template>
  <div class="app-linkedin" v-html="linkedIn"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'

export default defineComponent({
  name: 'AppLinkedIn',
  props: {
    html: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (props) {
    const { html } = toRefs(props)

    const linkedIn = ref(null)

    const tranformHtml = () => {
      // const linkedInBody = stringToHTML(html.value).querySelectorAll('.jobsearch-SerpJobCard')
      // let jobs = ''
      // for (let el = 0; el < linkedInBody.length; el++) {
      //   removeHtmlElement(linkedInBody[el], '.jobCardShelf, .tt_set')
      //   linkedInBody[el].querySelectorAll('a').forEach(element => {
      //     if (element.getAttribute('href')) {
      //       element.href = 'https://fr.linkedIn.com' + element.getAttribute('href')
      //     }
      //   })
      //   jobs += '<div class="item">' + linkedInBody[el].outerHTML + '</div>'
      // }
      // linkedIn.value = jobs
      console.log(html.value)
      linkedIn.value = html.value
    }

    watch(html, tranformHtml)

    onMounted(tranformHtml)

    return {
      linkedIn
    }
  }
})
</script>

<style lang="scss" scopped>
.app-linkedin {
  font-family: 'Noto Sans','Helvetica Neue',Helvetica,Arial,sans-serif !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.item {
  border: solid 2px rgb(80, 72, 72);
  padding: 15px 30px;
  max-width: 450px;
  margin: 2.5px;
  border-radius: 15px;
}
</style>
