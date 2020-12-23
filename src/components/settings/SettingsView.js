import {render} from "../../shared/dom";
import {GoogleVisionApiKeyView} from "../google-vision-api-key/GoogleVisionApiKeyView";

const templateHtml = `
<div style="display: none">
    <div style="display: flex; flex-direction: column">
        <template id="swquiz-settings-google-api-key"></template>
        <button id="swquiz-back-button" class="sw-quiz-mode-button-secondary" style="align-self: flex-start; margin-top: 2rem; margin-left: 6rem">Back</button>
    </div>
</div>
`

export const SettingsView = ({renderOn}) => {
  const element = render({on: renderOn, html: templateHtml})
  GoogleVisionApiKeyView({renderOn: "#swquiz-settings-google-api-key"})

  const onClickBackButtonHooks = []
  const backButton = document.getElementById("swquiz-back-button")
  backButton.addEventListener('click', () => {
    onClickBackButtonHooks.forEach(() => onClickBackButtonHooks.forEach(hook => hook()))
  })

  return {
    ...element,
    show() {
      element.style.display = 'block'
      return this
    },
    hide() {
      element.style.display = 'none'
      return this
    },
    onClickBackButton(hook) {
      onClickBackButtonHooks.push(hook)
      return this
    }
  }
}
