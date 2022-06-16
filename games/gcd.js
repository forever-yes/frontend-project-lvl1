import rng from '../src/rng.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const gcd = () => {
  const nums = [rng(), rng()];
  const answer = getGcd(nums[0], nums[1]);

  return [nums.join(' '), String(answer)];
};

export default gcd;
