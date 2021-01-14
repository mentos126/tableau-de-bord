<template>
  <div v-if="!logged" class="flex flex-col w-screen bg-gray-100">
      <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
              <form class="mt-10">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    autocomplete="current-password"
                    class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required
                    />
                  <button
                    type="submit"
                    class="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
                    @click.prevent="onSubmit()">
                      loggin
                  </button>
              </form>
          </div>
      </div>
  </div>
  <div v-else class="app-jobs-list md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div class="md:flex flex-col justify-start md:flex-row md:min-h-screen">
      <div class="flex flex-col md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
        <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            JOB LIST
          </a>
          <button
            class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="open = !open"
            >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path v-if="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              <path v-else fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <nav class="md:block px-4 pb-4 md:pb-0 md:overflow-y-auto" :class="{'block': open, 'hidden': !open}">
          <a :class="getLinkClasses('linkedIn')" href="#" @click="selected = 'linkedIn'">linkedIn</a>
          <a :class="getLinkClasses('indeed')" href="#" @click="selected = 'indeed'">Indeed</a>
          <a :class="getLinkClasses('sudOuestJob')" href="#" @click="selected = 'sudOuestJob'">SudOuestJob</a>
          <a :class="getLinkClasses('welcomeToTheJungle')" href="#" @click="selected = 'welcomeToTheJungle'">Welcome To The Jungle</a>
        </nav>
      </div>
    </div>
    <div class="w-full">
      <!-- <app-linked-in :html="linkedIn"></app-linked-in> -->
      <app-indeed v-if="selected === 'indeed'" :html="indeed"></app-indeed>
      <app-sud-ouest-job v-if="selected === 'sudOuestJob'" :html="sudOuestJob"></app-sud-ouest-job>
      <app-welcome-to-the-jungle v-if="selected === 'welcomeToTheJungle'" :html="welcomeToTheJungle"></app-welcome-to-the-jungle>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from '../hooks/store'
import { ActionsTypes } from '../store'
import AppIndeed from '../components/AppIndeed.vue'
// import AppLinkedIn from '../components/AppLinkedIn.vue'
import AppSudOuestJob from '../components/AppSudOuestJob.vue'
import AppWelcomeToTheJungle from '../components/AppWelcomeToTheJungle.vue'

export default defineComponent({
  name: 'JobsList',
  components: {
    AppIndeed,
    // AppLinkedIn,
    AppSudOuestJob,
    AppWelcomeToTheJungle
  },
  setup () {
    const logged = ref(false)
    const password = ref('')
    const open = ref(false)
    const selected = ref('')

    const store = useStore()
    const linkedIn = ref(null)
    const indeed = ref(null)
    const sudOuestJob = ref(null)
    const welcomeToTheJungle = ref(null)

    const onSubmit = () => {
      if (password.value === '') {
        logged.value = true
      } else {
        logged.value = false
      }
    }

    onMounted(async () => {
      // linkedIn.value = await store.dispatch('linkedIn/' + ActionsTypes.LinkedInActionTypes.GET_JOBS, null)
      indeed.value = await store.dispatch('indeed/' + ActionsTypes.IndeedInActionTypes.GET_JOBS, null)
      sudOuestJob.value = await store.dispatch('sudOuestJob/' + ActionsTypes.SudOuestJobActionTypes.GET_JOBS, null)
      welcomeToTheJungle.value = await store.dispatch('welcomeToTheJungle/' + ActionsTypes.WelcomeToTheJungleActionTypes.GET_JOBS, null)
    })

    const getLinkClasses = (link: string) => {
      const idemClasses = 'block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
      const selectedClasses = 'bg-gray-200 dark-mode:bg-gray-700'
      const notSelectedClasse = 'bg-transparent dark-mode:bg-transparent'

      if (link === selected.value) {
        return `${selectedClasses} ${idemClasses}`
      }
      return `${notSelectedClasse} ${idemClasses}`
    }

    return {
      indeed,
      logged,
      password,
      onSubmit,
      open,
      selected,
      getLinkClasses,
      linkedIn,
      sudOuestJob,
      welcomeToTheJungle
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
