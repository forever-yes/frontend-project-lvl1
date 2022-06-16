import rng from '../src/rng.js';

const calc = () => {
  const operands = ['+', '-', '*'];
  const numbers = [rng(), rng()];
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

  return [question, answer];
};

export default calc;
