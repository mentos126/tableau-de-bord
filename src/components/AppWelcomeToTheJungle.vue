<template>
<div>
  <!-- <div class="app-welcometothejungle" v-html="welcomeToTheJungle"></div> -->

  <iframe
    src="https://www.welcometothejungle.com/fr/jobs?page=1&sortBy=mostRecent&aroundQuery=Toulouse%2C%20France&query=d%C3%A9veloppeur&refinementList%5Bcontract_type_names.fr%5D%5B%5D=CDI&aroundLatLng=43.60579%2C1.44864&aroundRadius=20000"
    frameborder="0"
    sandbox=" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation allow-popups-to-escape-sandbox allow-downloads-without-user-activation allow-orientation-lock allow-presentation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    csp
    >
    <!-- referrerpolicy="
no-referrer
no-referrer-when-downgrade
origin
origin-when-cross-origin
same-origin
strict-origin
strict-origin-when-cross-origin
unsafe-url
    " -->
  </iframe>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'

export default defineComponent({
  name: 'AppWelcomeToTheJungle',
  props: {
    html: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (props) {
    const { html } = toRefs(props)

    const welcomeToTheJungle = ref()

    const tranformHtml = () => {
      const sudOuestJobBody1 = stringToHTML(html.value).querySelectorAll('.container')
      console.log(sudOuestJobBody1)
      const sudOuestJobBody = sudOuestJobBody1
      let jobs = ''
      for (let el = 0; el < sudOuestJobBody.length; el++) {
        // removeHtmlElement(sudOuestJobBody[el], '.bookmark')

        // sudOuestJobBody[el].querySelectorAll('img').forEach(element => {
        //   if (element.getAttribute('data-original')) {
        //     element.src = element.getAttribute('data-original')
        //   }
        // })

        jobs += '<div class="item">' + sudOuestJobBody[el].innerHTML + '</div>'
      }
      welcomeToTheJungle.value = html.value
    }

    watch(html, tranformHtml)

    onMounted(tranformHtml)

    return {
      welcomeToTheJungle
    }
  }
})
</script>

<style lang="scss" scopped>
.app-welcometothejungle {
  font-family: 'Noto Sans','Helvetica Neue',Helvetica,Arial,sans-serif !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  position: relative;
}

.item {
  border: solid 2px rgb(80, 72, 72);
  padding: 15px;
  width: 100%;
  max-width: 630px;
  margin: 2.5px;
  border-radius: 15px;
}

</style>
