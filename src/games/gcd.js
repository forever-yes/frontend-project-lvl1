import randomNumberGenerator from '../randomNumberGenerator.js';
import play from '../index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const dataGenerator = () => {
  const question = [randomNumberGenerator(), randomNumberGenerator()];
  const answer = getGcd(question[0], question[1]);

  return [question.join(' '), answer];
};

const startGcdGame = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const game = dataGenerator;
  return play(game, gameRule);
};

export default startGcdGame;
