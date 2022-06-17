import rng from '../rng.js';

const startProgressionGame = () => {
  const message = 'What number is missing in the progression?';
  const progressionLength = rng(10, 5);
  const progressionStep = rng(10);
  const hiddenNumber = rng(progressionLength);
  const firstNumber = rng();

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
  return [message, listOfNumbers.join(' '), String(answer)];
};

export default startProgressionGame;
