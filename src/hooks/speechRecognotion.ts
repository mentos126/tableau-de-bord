import { onMounted, Ref, ref, watch } from 'vue'

type useSpeechRecognitionType = {  
  toggleListening: () => void,
  isListening: Ref<boolean>,
  note: Ref<string>,
  error: Ref<SpeechRecognitionErrorCode>
}

export function useSpeechRecognition(): useSpeechRecognitionType {
  const isListening: Ref<boolean> = ref(false)
  const note: Ref<string> = ref('')
  const error: Ref<SpeechRecognitionErrorCode> = ref(null)

  let recognition: SpeechRecognition = null

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

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('')
  
      note.value = transcript
    }
  
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
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
