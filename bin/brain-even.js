#!/usr/bin/env node

import rng from '../src/rng.js';
import greeting from '../src/cli.js';
import dialog from '../src/dialog.js';

const brainEven = () => {
  const answers = ['yes', 'no'];

  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = rng();
    const answer = answers[num % 2];
    if (!dialog(num, answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

brainEven();
