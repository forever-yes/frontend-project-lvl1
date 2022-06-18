import randomNumberGenerator from '../random-number-generator.js';

const startEvenGame = () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  const num = randomNumberGenerator();
  const answer = (num % 2) === 0 ? 'yes' : 'no';
  return [message, num, answer];
};

export default startEvenGame;
