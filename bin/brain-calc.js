#!/usr/bin/env node

import calc from '../games/calc.js';
import play from '../src/index.js';

const message = 'What is the result of the expression?';

play(calc, message);
