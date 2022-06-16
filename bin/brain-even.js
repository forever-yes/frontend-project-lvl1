#!/usr/bin/env node

import even from '../games/even.js';
import play from '../src/index.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

play(even, message);
