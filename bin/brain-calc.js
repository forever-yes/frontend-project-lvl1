#!/usr/bin/env node

import rng from '../src/rng.js';
import greeting from '../src/cli.js';
import dialog from '../src/dialog.js';

const brainCalc = () => {
  const operands = ['+', '-', '*'];

  const name = greeting();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const numbers = [rng(), rng()];
    const operand = operands[(numbers[0] + numbers[1]) % 3];
    let answer = 0;
    let quest = '';

    switch (operand) {
      case '+':
        answer = String(numbers[0] + numbers[1]);
        quest = `${numbers[0]} + ${numbers[1]}`;
        break;
      case '-':
        answer = String(numbers[0] - numbers[1]);
        quest = `${numbers[0]} - ${numbers[1]}`;
        break;
      case '*':
        answer = String(numbers[0] * numbers[1]);
        quest = `${numbers[0]} * ${numbers[1]}`;
        break;
      default:
        console.log('wtf?');
    }
    if (!dialog(quest, answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

brainCalc();
