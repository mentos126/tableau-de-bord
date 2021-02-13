<template>
  <div class="flex flex-col h-screen">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden" @click="toggleIsNavOpen()">
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link
                  v-for="route in $router.options.routes.slice().reverse()"
                  :key="route.name"
                  :to="route.name === 'Home' ? '/' : route.path"
                  class="text-sm"
                  :class="navClass(route)"
                  >
                  {{ route.label }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:hidden" :class="{'hidden': !isNavOpen}">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="route in $router.options.routes.slice().reverse()"
            :key="route.name"
            :to="route.name === 'Home' ? '/' : route.path"
            class="block  text-base"
            :class="navClass(route)"
            @click="clickLink()"
            >
            {{ route.label }}
          </router-link>
        </div>
      </div>
    </nav>
    <div class="bg-gray-100 flex justify-center items-center flex-grow">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup () {
    const router = useRouter()
    const isNavOpen = ref(false)
    const lastRoute = ref(null)

    const toggleIsNavOpen = () => {
      isNavOpen.value = !isNavOpen.value
    }

    const navClass = (route: RouteRecordRaw) => {
      const base = 'px-3 py-2 rounded-md font-medium'

      return `${base} + ${router.currentRoute.value.name === route.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
    }

    const clickLink = () => {
      isNavOpen.value = false
    }

    onMounted(() => {
      lastRoute.value = router.currentRoute.value.fullPath
    })

    return {
      isNavOpen,
      toggleIsNavOpen,
      navClass,
      clickLink
    }
  }
})
</script>
