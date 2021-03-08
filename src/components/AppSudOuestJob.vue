<template>
  <div class="app-sudouestjob" v-html="sudOuestJob"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref, toRefs, watch } from 'vue'
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
    const sudOuestJob: Ref<string> = ref(null)

    const tranformHtml = () => {
      const sudOuestJobBody = stringToHTML(html.value).querySelectorAll('.content.nocard.autonome .action.crushed.autonome.autopadding')
      let jobs = ''

      for (let el = 0; el < sudOuestJobBody.length; el++) {
        removeHtmlElement(sudOuestJobBody[el], '.bookmark')

        sudOuestJobBody[el].querySelectorAll('img').forEach(element => {
          if (element.getAttribute('data-original')) {
            element.src = element.getAttribute('data-original')
          }
        })

        sudOuestJobBody[el].querySelectorAll('svg').forEach(element => {
          if (element.getAttribute('data-load-url')) {
            const img = document.createElement('img')
            img.src = element.getAttribute('data-load-url')
            element.parentElement.appendChild(img)
            removeHtmlElement(element.parentElement, 'svg')
          }
        })

        let anchors: HTMLAnchorElement[] = <any>sudOuestJobBody[el].querySelectorAll('h3 a') as HTMLAnchorElement[]
        
        anchors.forEach((element: HTMLAnchorElement) => {
          if (element.getAttribute('href')) {
            const link = 'https://www.sudouestjob.com/' + element.getAttribute('href')
            const action = element.parentElement.parentElement.parentElement.querySelector('.action')
            const innerHTML = action.firstElementChild
            action.removeChild(action.firstChild)
            const a = document.createElement('a') as HTMLAnchorElement
            a.href = link
            a.appendChild(innerHTML)
            a.target = '_blank'
            action.appendChild(a)
            element.href = link
            element.target = '_blank'
          }
        })

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
  align-items: center;
  flex-direction: column;
  color: black;
}

.item {
  border: solid 2px rgb(80, 72, 72);
  padding: 15px;
  width: 100%;
  max-width: 630px;
  margin: 2.5px;
  border-radius: 15px;
}

  .new,
  .augmented {
    display: flex;
  }

  .item :nth-child(1){
    position: relative;
  }

  .logo,
  .augmented.logo {
    position: relative;
    width: 140px;
    height: 90px;
    top: 0px;
    left: 0px;
    margin-right: 25px;
  }

  .augmented.logo img {
    width: 200px;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0;
  }

  .augmented.logo :nth-child(2){
    position: absolute;
    width: 100px;
    height: 40px;
    top: 77px;
    left: 19px;
  }

  .offer--content {
    width: calc(100% - 150px);
    padding-top: 15px;
    color: black;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bolder;
  }

  .entname,
  .infos {
    font-size: .8rem;
  }

  .infos {
    display: flex;
    justify-content: space-around;
    color: rgb(109, 109, 109);
  }

  .loc,
  .contract {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;

    span {
      margin-left: 10px;
    }
  }

  .action {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: .9rem;
    color: rgb(0, 110, 255);
    font-weight: bold;
    border: solid 2px  rgb(0, 110, 255);
    padding: 5px 10px;
    border-radius: 25px;
  }

  .otherinfo {
    font-size: 1rem;
    font-weight: 500;

    .highlight {
      padding: 15px;
    }

    .highlight :nth-child(1){
      display: none;
    }
  }

  .lastinfo {
    font-size: .8rem;
    color: rgb(109, 109, 109);
  }
</style>
