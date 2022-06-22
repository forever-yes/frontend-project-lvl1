import randomNumberGenerator from '../randomNumberGenerator.js';
import play from '../index.js';

const dataGenerator = () => {
  const operands = ['+', '-', '*'];
  const operand = operands[randomNumberGenerator() % 3];
  const question = [randomNumberGenerator(), randomNumberGenerator(10)];
  let answer = 0;

  switch (operand) {
    case '+':
      answer = question[0] + question[1];
      break;
    case '-':
      answer = question[0] - question[1];
      break;
    case '*':
      answer = question[0] * question[1];
      break;
    default:
      return (console.error('something wrond with switch construction'));
  }

  return [question.join(` ${operand} `), answer];
};

const startCalcGame = () => {
  const gameRule = 'What is the result of the expression?';

  return play(dataGenerator, gameRule);
};

export default startCalcGame;
