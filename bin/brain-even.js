#!/usr/bin/env node

import readlineSync from 'readline-sync';
import rng from '../src/rng.js';
import greeting from '../src/cli.js';

const brainEven = () => {
  const answers = ['yes', 'no'];

  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = rng();
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (num % 2 === answers.indexOf(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[num % 2]}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

brainEven();

export default brainEven;
