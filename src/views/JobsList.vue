<template>
  <div>
    <pre>
      {{ JSON.stringify(linkedIn, undefined, 2) }}
    </pre>
    <hr>
    <pre>
      {{ JSON.stringify(indeed, undefined, 2) }}
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from '../hooks/store'
import { LinkedInActionTypes } from '../store/linkedIn/action-types'
import { IndeedInActionTypes } from '../store/indeed/action-types'
import axios from 'axios'

export default defineComponent({
  setup () {
    const store = useStore()
    const linkedIn = ref(null)
    const indeed = ref(null)

    const config = {
      method: 'get',
      url: 'https://fr.indeed.com/emplois?q=Informatique%20Client%20Final&ts=1602770352141&rq=1&rsIdx=0&fromage=last&newcount=401',
      headers: {
        Cookie: 'CTK=1erom3jhlstgk800; INDEED_CSRF_TOKEN=TdPnR0UARdWXmTmWWyLV9maSZvKsYv9Q; jasxMarvin=1; loctip=1; PPN=1; JSESSIONID=E176855D69E4189FE53ABB69206FAC70; UD="LA=1610370003:CV=1610367487:TS=1610367487:SG=75dcbd2a107611cd454179e4ba933db2"; RQ="q=Informatique+Client+Final&l=&ts=1610370003394"; jaSerpCount=2'
      }
    }

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log(error)
      })

    onMounted(async () => {
      // linkedIn.value = await store.dispatch(LinkedInActionTypes.GET_JOBS, null)
      indeed.value = await store.dispatch(IndeedInActionTypes.GET_JOBS, null)
    })

    return {
      linkedIn,
      indeed
    }
  }
})
</script>

<style scoped>

</style>
