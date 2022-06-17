import readlineSync from 'readline-sync';
import greeting from './cli.js';

const play = (game) => {
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
