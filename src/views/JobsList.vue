<template>
  <div class="app-jobs-list">
    <!-- <app-linked-in :html="linkedIn"></app-linked-in> -->
    <app-indeed :html="indeed"></app-indeed>
    <app-sud-ouest-job :html="sudOuestJob"></app-sud-ouest-job>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from '../hooks/store'
// import { LinkedInActionTypes } from '../store/linkedIn/action-types'
import { IndeedInActionTypes } from '../store/indeed/action-types'
import { SudOuestJobActionTypes } from '../store/sudOuestJob/action-types'
import AppIndeed from '../components/AppIndeed.vue'
// import AppLinkedIn from '../components/AppLinkedIn.vue'
import AppSudOuestJob from '../components/AppSudOuestJob.vue'

export default defineComponent({
  name: 'JobsList',
  components: {
    AppIndeed,
    // AppLinkedIn,
    AppSudOuestJob
  },
  setup () {
    const store = useStore()
    const linkedIn = ref(null)
    const indeed = ref(null)
    const sudOuestJob = ref(null)

    onMounted(async () => {
      // linkedIn.value = await store.dispatch('linkedIn/' + LinkedInActionTypes.GET_JOBS, null)
      indeed.value = await store.dispatch('indeed/' + IndeedInActionTypes.GET_JOBS, null)
      sudOuestJob.value = await store.dispatch('sudOuestJob/' + SudOuestJobActionTypes.GET_JOBS, null)
    })

    return {
      indeed,
      linkedIn,
      sudOuestJob
    }
  }
})
</script>

<style lang="scss" scopped>
.app-jobs-list {
  display: flex;
  justify-content: space-around;
}
</style>
