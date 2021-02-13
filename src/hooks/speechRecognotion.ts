import { onMounted, ref, watch } from 'vue'

export function useSpeechRecognition() {
  const isListening = ref(false)
  const note = ref('')
  const error = ref(null)

  let recognition = null

  const toggleListening = () => {
    isListening.value = !isListening.value
  }

  const handleListening = () => {
    if (isListening.value) {
      recognition.start()
    } else {
      recognition.stop()
    }
  }

  watch(isListening, () => {
    handleListening()
  })

 

  onMounted(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'fr-FR'

    recognition.onresult = event => {
      console.log(event.results)
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('')
  
      note.value = transcript
    }
  
    recognition.onerror = event => {
      isListening.value = false
      error.value = event.error
    }
  })

  return {
    toggleListening,
    isListening,
    note,
    error
  }
}
