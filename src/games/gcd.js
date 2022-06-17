import rng from '../rng.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const startGcdGame = () => {
  const message = 'Find the greatest common divisor of given numbers.';
  const nums = [rng(), rng()];
  const answer = getGcd(nums[0], nums[1]);

  return [message, nums.join(' '), String(answer)];
};

export default startGcdGame;
