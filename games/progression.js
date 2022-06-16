import rng from '../src/rng.js';

const progression = () => {
  const progressionLength = (rng() % 10) + 5;
  const progressionStep = (rng() % 10);
  const hiddenNumber = Math.floor((rng() / 100) * progressionLength);
  const listOfNumbers = [];
  const firstNumber = rng();
  let answer = 0;

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === hiddenNumber) {
      listOfNumbers.push('..');
      answer = ((progressionStep * i) + firstNumber);
    } else {
      listOfNumbers.push((progressionStep * i) + firstNumber);
    }
  }
  return [listOfNumbers.join(' '), String(answer)];
};

export default progression;
