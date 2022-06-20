import randomNumberGenerator from '../randomNumberGenerator.js';
import play from '../index.js';

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

const dataGenerator = () => {
  const question = randomNumberGenerator();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startPrimeGame = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const game = dataGenerator;

  return play(game, gameRule);
};

export default startPrimeGame;
