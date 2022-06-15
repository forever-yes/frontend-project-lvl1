#!/usr/bin/env node

import greeting from '../src/cli.js';
import rng from '../src/rng.js';
import dialog from '../src/dialog.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = rng();
    const answer = isPrime(question) ? 'yes' : 'no';

    if (!dialog(question, answer, name)) {
      return;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

prime();
