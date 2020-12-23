import {render} from "../../shared/dom";

const templateHtml = ({title, rules}) => `
<div id="swquiz-mode" style="display: flex; flex-direction: column">
    <div id="swquiz-mode-inner" class="swquiz-mode">
        <div class="swquiz-question-image-bg"></div>
        <div style="width: 2rem"></div>
        <div id="swquiz-mode-menu" class="swquiz-mode-menu">
            <div class="swquiz-mode-title"><p id="swquiz-mode-title-text">${title}</p></div>
            <div id="swquiz-mode-content" class="swquiz-mode-content">
                <h2>Mode Rules</h2>
                <p id="swquiz-mode-rules-text">${rules}</p>
            </div>
            <div class="sw-quiz-mode-buttons">
                <button id="swquiz-mode-hall-of-fame-button" class="sw-quiz-mode-button-secondary" data-testid="hall-of-fame-button">Hall of fame</button>
                <div style="width: 2rem"></div>
                <button class="sw-quiz-mode-button-play" id="play-the-game-button" data-testid="play-the-game-button">PLAY THE GAME</button>
            </div>
        </div>
    </div>
    <button id="swquiz-settings-button" data-testid="swquiz-settings-button" class="sw-quiz-mode-button-secondary" style="align-self: flex-start; margin-top: 2rem; margin-left: 6rem">Settings</button>
</div>
`

export const ModeMenuView = ({renderOn, data}) => {
  const element = render({on: renderOn, html: templateHtml({name: data.name, title: data.title, rules: data.rules})})

  const onClickPlayTheGameButtonHooks = []
  const onClickHallOfFameButtonHooks = []
  const onClickSettingsButtonHooks = []

  const playTheGameButton = document.getElementById("play-the-game-button")
  playTheGameButton.addEventListener('click', () => onClickPlayTheGameButtonHooks.forEach(hook => hook(data.name)))
  const hallOfFameButton = document.getElementById("swquiz-mode-hall-of-fame-button")
  hallOfFameButton.addEventListener('click', () => onClickHallOfFameButtonHooks.forEach(hook => hook(data.name)))
  const settingsButton = document.getElementById("swquiz-settings-button")
  settingsButton.addEventListener('click', () => onClickSettingsButtonHooks.forEach(hook => hook()))

  const view = {
    onClickPlayTheGameButton(hook) {
      onClickPlayTheGameButtonHooks.push(hook)
      return view;
    },
    onClickHallOfFameButton(hook) {
      onClickHallOfFameButtonHooks.push(hook)
      return view;
    },
    onClickSettingsButton(hook) {
      onClickSettingsButtonHooks.push(hook)
      return view;
    },
    show() {
      element.style.display = 'flex'
      return view;
    },
    hide() {
      element.style.display = 'none'
      return view;
    }
  }
  return view;
}
