import {getRandomIntInclusive} from "../../shared/Random";

export const ComputerRandomizerPlayer = () => {
  const onAnswerGivenHooks = []
  const player = {
    async askQuestion({question}) {
      console.log("QUESTION ASKED", question)
      const recognized = question.answers[getRandomIntInclusive(0, 3)].name
      return Promise.resolve()
          .then(sleeper(1000))
          .then(() => this.giveAnswer({answer: recognized}))
          .then();
    },
    giveAnswer({answer}) {
      onAnswerGivenHooks.forEach(hook => hook(answer))
    },
    onAnswerGiven(hook) {
      onAnswerGivenHooks.push(hook)
      return player;
    }
  }
  return player;
}

function sleeper(ms) {
  return function (x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}
