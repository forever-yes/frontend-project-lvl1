#!/usr/bin/env node

import prime from '../games/prime.js';
import play from '../src/index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

play(prime, message);
