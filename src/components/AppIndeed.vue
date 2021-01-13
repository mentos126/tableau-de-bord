<template>
  <div class="app-indeed" v-html="indeed"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'

export default defineComponent({
  name: 'AppIndeed',
  props: {
    html: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (props) {
    const { html } = toRefs(props)

    const indeed = ref(null)

    const tranformHtml = () => {
      const indeedBody = stringToHTML(html.value).querySelectorAll('.jobsearch-SerpJobCard')
      let jobs = ''
      for (let el = 0; el < indeedBody.length; el++) {
        removeHtmlElement(indeedBody[el], '.jobCardShelf, .tt_set')
        indeedBody[el].querySelectorAll('a').forEach(element => {
          if (element.getAttribute('href')) {
            element.href = 'https://fr.indeed.com' + element.getAttribute('href')
          }
        })
        jobs += '<div class="item">' + indeedBody[el].outerHTML + '</div>'
      }
      indeed.value = jobs
    }

    watch(html, tranformHtml)

    onMounted(tranformHtml)

    return {
      indeed
    }
  }
})
</script>

<style lang="scss" scopped>
.app-indeed {
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

.title {
  position: relative;
  font-size: 1.5rem;
  font-weight: bolder;
  padding-top: 20px;
  padding-left: 5px;
}

.new {
  position: absolute;
  font-size: 1.2rem;
  font-weight: normal;
  top: 0;
  left: 0;
  color: rgb(197, 49, 49);
}

.sjcl {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
}

.sjcl :nth-child(1) {
  display: flex;
}

.company {
  padding-right: 15px;
  font-weight: bold;
}

.ratingsContent {
  display: flex;
  align-items: center;
}

.location  {
  font-size: 1rem;
}

.summary {
  padding: 10px;
  font-size: .9rem;
  font-weight: normal;
}

.jobsearch-SerpJobCard-footer {
  font-size: .8rem;
  padding-left: 15px;
}

b {
  font-weight: normal;
}
</style>
