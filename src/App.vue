<template>
  <div id="app" class="container mx-auto">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/brawlstars">Brawlstars</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
