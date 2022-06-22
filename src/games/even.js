import randomNumberGenerator from '../randomNumberGenerator.js';
import play from '../index.js';

const dataGenerator = () => {
  const question = randomNumberGenerator();
  const answer = (question % 2) === 0 ? 'yes' : 'no';

  return [question, answer];
};

const startEvenGame = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  return play(dataGenerator, gameRule);
};

export default startEvenGame;
