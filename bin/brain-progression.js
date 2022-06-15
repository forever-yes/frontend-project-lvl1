#!/usr/bin/env node

import greeting from '../src/cli.js';
import rng from '../src/rng.js';
import dialog from '../src/dialog.js';

const progressionGenerator = () => {
  const progressionLength = (rng() % 10) + 5;
  const progressionStep = (rng() % 10);
  const hiddenNumber = Math.floor((rng() / 100) * progressionLength);
  const listOfNumbers = [];
  const firstNumber = rng();
  let answer = 0;

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === hiddenNumber) {
      listOfNumbers.push('..');
      answer = ((progressionStep * i) + firstNumber);
    } else {
      listOfNumbers.push((progressionStep * i) + firstNumber);
    }
  }
  return [listOfNumbers, String(answer)];
};

const progression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = progressionGenerator();
    if (!dialog(question.join(' '), answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

progression();
