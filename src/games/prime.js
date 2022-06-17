import rng from '../rng.js';

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

const startPrimeGame = () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const num = rng();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [message, num, answer];
};

export default startPrimeGame;
