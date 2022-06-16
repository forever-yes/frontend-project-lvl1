#!/usr/bin/env node

import gcd from '../games/gcd.js';
import play from '../src/index.js';

const message = 'Find the greatest common divisor of given numbers.';

play(gcd, message);
