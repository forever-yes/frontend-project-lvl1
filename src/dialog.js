import readlineSync from 'readline-sync';

const dialog = (quest, answer, name) => {
  console.log(`Question: ${quest}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (answer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
    console.log(`Let's try again, ${name}`);
    return false;
  }
  return true;
};

export default dialog;
