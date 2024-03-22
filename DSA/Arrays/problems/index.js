//Write a program to count number of 0's and 1's but makesure you don't add any conditional check for explicitly looking for 0 and 1 also iterate array only once

const countArr = arr => {
  let countOfOnes = 0;
  let countOfZeroes = 0;
  for (let element of arr) {
    element ? countOfOnes++ : countOfZeroes++;
  }
  return { countOfOnes, countOfZeroes };
};

console.log(countArr([1, 0, 1, 0, 1, 1, 0]));

//Write a program to find sum of array of objects
const arr = [
  { a: 10, b: 2 },
  { c: 2, d: 13 },
  { a: 2, c: 5 },
];

const sum = arr => {
  const res = arr.reduce((acc, cur) => {
    for (let key in cur) {
      acc[key] = (acc[key] || 0) + cur[key];
    }
    return acc;
  }, {});
  return res;
};

console.log(sum(arr));
