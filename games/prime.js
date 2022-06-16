import rng from '../src/rng.js';

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
  const num = rng();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};

export default prime;
