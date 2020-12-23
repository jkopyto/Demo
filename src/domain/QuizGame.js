import {ONE_SECOND_MILLIS} from "../shared/TimeUnits";

export const QuizGame = ({human, computer, mode, quizMaxTime, startTimer, answerChecker}) => {
  const onGameOverHooks = []
  const onTimerTickHooks = []
  const questions = {}
  const players = {
    human,
    computer
  }
  const playersAnswers = {
    human: {},
    computer: {}
  }

  async function generateQuestions(next = 10) {
    for (let i = 0; i < next; i++) {
      questions[Object.keys(questions).length] = await mode.generateQuestion()
    }
  }

  async function askAllPlayers(question) {
    await Promise.all(
        Object.keys(players).map(async playerName => {
          const player = players[playerName]
          player.onAnswerGiven(answer => {
            game.giveAnswer({player: playerName, answer})
          })
          await player.askQuestion({question})
        })
    )
  }

  function startCountingTime() {
    startTimer({
      tickMillis: ONE_SECOND_MILLIS,
      timeout: quizMaxTime,
      onTick: ({passedTime, tickMillis}) => {
        onTimerTickHooks.forEach(hook => hook({passedTime, tickMillis}))
      },
      onTimeout: () => {
        onGameOverHooks.forEach(hook => hook(GameOver({questions, playersAnswers})))
      }
    })
  }

  async function keepQuestionsToAskInAdvance({keepAtLeast, answeredQuestionIndex}) {
    const questionsToAsk = Object.keys(questions).length;
    if (questionsToAsk - answeredQuestionIndex <= keepAtLeast) {
      await generateQuestions()
    }
  }

  const game = {
    humanPlayer: human,
    computerPlayer: computer,
    async startGame() {
      await generateQuestions();
      const firstQuestion = questions[0];
      await askAllPlayers(firstQuestion);
      startCountingTime();
    },
    async giveAnswer({player, answer}) {
      const playerAnswers = playersAnswers[player];
      const questionIndex = Object.keys(playerAnswers).length;
      const answeredQuestion = questions[questionIndex];
      const isCorrect = answerChecker
          .isAnswerCorrect({correctAnswer: answeredQuestion.rightAnswer.name, givenAnswer: answer})
      playerAnswers[questionIndex] = {answerName: answer, isCorrect}
      const questionToAsk = questions[questionIndex+1];
      await players[player].askQuestion({question: questionToAsk})
      await keepQuestionsToAskInAdvance({keepAtLeast: 5, answeredQuestionIndex: questionIndex});
    },
    onGameOver(hook) {
      onGameOverHooks.push(hook)
      return game;
    },
    onTimerTick(hook) {
      onTimerTickHooks.push(hook)
      return game;
    }
  };
  return game
}

function GameOver({questions, playersAnswers}) {
  const lastAnsweredIndex = Math.max(Object.keys(playersAnswers.human).length, Object.keys(playersAnswers.computer).length)
  const answerList = Object.values(questions)
      .slice(0, lastAnsweredIndex)
      .map((question, index) => {
        const computerAnswer = playersAnswers.computer[index];
        const humanAnswer = playersAnswers.human[index];
        let answers = {
          image: question.image,
          correctAnswerName: question.rightAnswer.name
        }
        if (computerAnswer) {
          answers = {
            ...answers, computerAnswer: {
              answerName: computerAnswer.answerName,
              isCorrect: computerAnswer.isCorrect
            }
          }
        }
        if (humanAnswer) {
          answers = {
            ...answers, humanAnswer: {
              answerName: humanAnswer.answerName,
              isCorrect: humanAnswer.isCorrect
            }
          }
        }
        return answers;
      })
  return {answers: answerList}
}
