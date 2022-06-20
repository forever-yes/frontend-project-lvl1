import readlineSync from 'readline-sync';

const greeting = (gameRule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (gameRule) {
    console.log(gameRule);
  }
  return name;
};

export default greeting;
