import readlineSync from 'readline-sync';

import greeting from './cli.js';
import startCalcGame from './games/calc.js';
import startEvenGame from './games/even.js';
import startGcdGame from './games/gcd.js';
import startPrimeGame from './games/prime.js';
import startProgressionGame from './games/progression.js';

const play = (gameName) => {
  let game = () => {};
  switch (gameName) {
    case ('brain-calc'):
      game = startCalcGame;
      break;
    case ('brain-even'):
      game = startEvenGame;
      break;
    case ('brain-gcd'):
      game = startGcdGame;
      break;
    case ('brain-prime'):
      game = startPrimeGame;
      break;
    case ('brain-progression'):
      game = startProgressionGame;
      break;
    default:
      console.log('wtf?');
  }

  const [message] = game();
  const name = greeting();
  console.log(message);
  const attempts = 3;

  for (let i = 0; i < attempts; i += 1) {
    const [question, answer] = game().slice(1);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
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
