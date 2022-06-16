import rng from '../src/rng.js';

const even = () => {
  const num = rng();
  const answer = (num % 2) === 0 ? 'yes' : 'no';
  return [num, answer];
};

export default even;
