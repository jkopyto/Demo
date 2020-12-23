import {LightsaberTimerView} from "./components/timer/LightsaberTimerView";
import {MainMenuView} from "./components/main-menu/MainMenuView";

function mainMenu() {
  const component = MainMenuView({renderOn: "#component-mainmenu", options: ["people", "vehicles", "starships"], selectedOption: "people"})
}

function lightsaberTimer() {
  const component = LightsaberTimerView({renderOn: "#component-lightsaber-timer", timeout: 1000})
  component.show();
}

mainMenu();
lightsaberTimer();
