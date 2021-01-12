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
// import { useStore } from '../hooks/store'
import { store } from '../store'
import { LinkedInActionTypes } from '../store/linkedIn/action-types'
import { IndeedInActionTypes } from '../store/indeed/action-types'
// import { indeedScraper } from '../indeed-scraper'
// import axios from 'axios'

export default defineComponent({
  setup () {
    // const store = useStore()
    const linkedIn = ref(null)
    const indeed = ref(null)

    // const queryOptions = {
    //   host: 'www.indeed.com',
    //   query: 'Software',
    //   city: 'Seattle, WA',
    //   radius: '25',
    //   level: 'entry_level',
    //   jobType: 'fulltime',
    //   maxAge: '7',
    //   sort: 'date',
    //   limit: 100
    // }

    // indeedScraper.query(queryOptions).then(res => {
    //   console.log(res) // An array of Job objects
    // })

    onMounted(async () => {
      linkedIn.value = await store.dispatch('linkedIn/' + LinkedInActionTypes.GET_JOBS, null)
      indeed.value = await store.dispatch('indeed/' + IndeedInActionTypes.GET_JOBS, null)
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
