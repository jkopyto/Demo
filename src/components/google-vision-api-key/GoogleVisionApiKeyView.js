import {render} from "../../shared/dom";
import {InMemoryGoogleVisionApiKey} from "../../infrastructure/InMemoryGoogleVisionApiKey";

const templateHtml = `
<div id="google-api-key-save" data-testid="google-api-key-save" style="display: flex; align-items: center; justify-content: center; margin: 2rem">
                <p style="font-size: 1.30rem; margin: 0 1rem 0 0; padding-left: 2rem; color: white;">Google Vision API Key: </p>
                <label for="google-vision-api-key-input">
                    <input id="google-vision-api-key-input" name="google-vision-api-key-input"
                           class="google-vision-api-key-input" type="password" minlength="39"
                           maxlength="39" required/>
                </label>
                <div style="margin-right: 2rem"></div>
                <div>
                    <button id="swquiz-googlevisionapi-save" class="sw-quiz-mode-button-secondary">Save</button>
                    <button id="swquiz-googlevisionapi-clear" class="sw-quiz-mode-button-secondary">Clear</button>
                </div>
</div>
`

export const GoogleVisionApiKeyView = ({renderOn}) => {
  const element = render({on: renderOn, html: templateHtml})
  const inMemoryGoogleVisionApiKey = InMemoryGoogleVisionApiKey();

  const apiKeyInput = element.querySelector("#google-vision-api-key-input")
  apiKeyInput.value = inMemoryGoogleVisionApiKey.get() ?? ""

  const saveButton = element.querySelector("#swquiz-googlevisionapi-save")
  saveButton.addEventListener('click', () => {
    inMemoryGoogleVisionApiKey.save({apiKey: apiKeyInput.value})
  })
  const clearButton = element.querySelector("#swquiz-googlevisionapi-clear")
  clearButton.addEventListener('click', () => {
    inMemoryGoogleVisionApiKey.clear()
    apiKeyInput.value = ''
  })

  return {
    ...element,
    show() {
      element.style.display = 'flex'
    },
    hide() {
      element.style.display = 'none'
    }
  }
}
