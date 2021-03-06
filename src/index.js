import readlineSync from 'readline-sync';

import greeting from './cli.js';

const defaultQuestions = 3;

const play = (game, gameRule, questions = defaultQuestions) => {
  const name = greeting(gameRule);
  console.log(gameRule);

  for (let i = 0; i < questions; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
