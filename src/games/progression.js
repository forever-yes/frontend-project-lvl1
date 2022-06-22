import randomNumberGenerator from '../randomNumberGenerator.js';
import play from '../index.js';

const dataGenerator = () => {
  const progressionLength = randomNumberGenerator(10, 5);
  const progressionStep = randomNumberGenerator(10);
  const hiddenNumber = randomNumberGenerator(progressionLength);
  const firstNumber = randomNumberGenerator();

  const listOfNumbers = [];
  let answer = 0;

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === hiddenNumber) {
      listOfNumbers.push('..');
      answer = ((progressionStep * i) + firstNumber);
    } else {
      listOfNumbers.push((progressionStep * i) + firstNumber);
    }
  }
  return [listOfNumbers.join(' '), answer];
};

const startProgressionGame = () => {
  const gameRule = 'What number is missing in the progression?';

  return play(dataGenerator, gameRule);
};

export default startProgressionGame;
