<template>
  <div class="flex flex-col -bottom-0">
    <button
      type="button"
      class="border text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
      :class="{'border-red-500 bg-red-500 hover:bg-red-600': isListening, 'border-blue-500 bg-blue-500 hover:bg-blue-600': !isListening}"
      @click="toggleListening"
      >
      {{ isListening ? 'En enregistrement' : 'Enregistrer' }}
    </button>
    <p v-if="error">Error: {{ error }}</p>
    <p v-else class="border border-gray-600 rounded-md p-4">{{ note }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSpeechRecognition } from '../hooks/speechRecognotion'

export default defineComponent({
  name: 'AppTestSpechRecognition',
  setup () {
    const { toggleListening, isListening, note, error } = useSpeechRecognition()

    return {
      toggleListening,
      isListening,
      note,
      error
    }
  }
})
</script>

<style scoped>

</style>
