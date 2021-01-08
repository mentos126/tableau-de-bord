<template>
  <div>
    coucou
    <section>
      <h2>Composition API Component</h2>
      <p>{{ counter }}</p>
      <p>{{ doubledCounter }}</p>
      <pre>
        {{ JSON.stringify(res) }}
      </pre>
      <button @click="resetCounter()">Reset counter</button>
      <button @click="addCounter()">Add counter</button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import { useStore } from '../hooks/store'
import { BrawlersMutationTypes } from '../store/brawlstars/mutations-types'
import { BrawlstarsActionTypes } from '../store/brawlstars/action-types'

export default defineComponent({
  name: 'AppBrawlstars',
  setup (props, context) {
    const store = useStore()
    const counter = computed(() => store.state.brawlstars.counter)
    const doubledCounter = computed(() => store.getters.doubledCounter)

    function resetCounter () {
      store.commit(BrawlersMutationTypes.SET_COUNTER, 0)
    }

    const res = ref(null)

    onMounted(async () => {
      console.log(store)
      res.value = await store.dispatch(BrawlstarsActionTypes.GET_BRAWLSTARS_PROFILE, 'PQJQ9L98U')
    })

    function addCounter () {
      store.commit(BrawlersMutationTypes.SET_COUNTER, 5)
    }

    return {
      counter,
      doubledCounter,
      resetCounter,
      addCounter,
      res
    }
  }
})
</script>

<style scoped>

</style>
