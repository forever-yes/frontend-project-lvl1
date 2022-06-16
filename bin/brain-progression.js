#!/usr/bin/env node

import progression from '../games/progression.js';
import play from '../src/index.js';

const message = 'What number is missing in the progression?';

play(progression, message);
