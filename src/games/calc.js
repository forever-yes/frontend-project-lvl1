import randomNumberGenerator from '../random-number-generator.js';

const startCalcGame = () => {
  const message = 'What is the result of the expression?';

  const operands = ['+', '-', '*'];
  const numbers = [randomNumberGenerator(), randomNumberGenerator(10)];
  const operand = operands[randomNumberGenerator() % 3];
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

  return [message, numbers.join(` ${operand} `), answer];
};

export default startCalcGame;
