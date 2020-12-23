const googleVisionApiKey = {
  value: undefined
}

export const InMemoryGoogleVisionApiKey = () => {
  return {
    save({apiKey}) {
      googleVisionApiKey.value = apiKey
      return googleVisionApiKey
    },
    get() {
      return googleVisionApiKey.value
    },
    clear() {
      googleVisionApiKey.value = undefined
    },
    isSet() {
      return googleVisionApiKey.value !== undefined
    }
  }
}
