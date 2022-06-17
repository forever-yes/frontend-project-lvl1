import rng from '../rng.js';

const startCalcGame = () => {
  const message = 'What is the result of the expression?';
  const operands = ['+', '-', '*'];
  const numbers = [rng(), rng(10)];
  const operand = operands[rng() % 3];
  const question = numbers.join(` ${operand} `);
  let answer = 0;

  switch (operand) {
    case '+':
      answer = String(numbers[0] + numbers[1]);
      break;
    case '-':
      answer = String(numbers[0] - numbers[1]);
      break;
    case '*':
      answer = String(numbers[0] * numbers[1]);
      break;
    default:
      console.log('wtf?');
  }

  return [message, question, answer];
};

export default startCalcGame;
