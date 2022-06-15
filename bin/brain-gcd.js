#!/usr/bin/env node

import greeting from '../src/cli.js';
import dialog from '../src/dialog.js';
import rng from '../src/rng.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const gcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const nums = [rng(), rng()];
    const answer = getGcd(nums[0], nums[1]);

    if (!dialog(`${nums[0]} ${nums[1]}`, String(answer), name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

gcd();
