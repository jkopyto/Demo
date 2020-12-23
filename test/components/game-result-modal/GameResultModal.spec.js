import {GameResultModal} from "../../../src/components/game-result-modal/GameResultModal";
import {aModalData} from "./fixtures";

describe("Component | Game Result Modal", () => {

  const modal = GameResultModal()

  describe('given modal is shown', () => {

    beforeEach(() => {
      modal.show({data: aModalData})
    })

    it('then modal should be on the screen', () => {
      expect(document.getElementById("swquiz-game-result-modal")).not.toBeNull();
    })

    describe('when submit score save', () => {

      const scoreSavedHook = jest.fn();

      beforeEach(() => {
        modal.onScoreSave(scoreSavedHook)
      })

      afterEach(() => {
        scoreSavedHook.mockClear();
      })

      it('then score saved hooks should be notified', () => {
        const playerName = "Sample Player Name"
        modal.submitScoreSave({playerName})

        expect(scoreSavedHook).toBeCalledTimes(1);
        expect(scoreSavedHook).toBeCalledWith({playerName});
      })


    });
  });

})
