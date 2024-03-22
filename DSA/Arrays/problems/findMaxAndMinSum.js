const findMaxAndMinSum = (arr, k) => {
  arr.sort((a, b) => a - b);

  const minSum = arr.slice(0, arr.length - k).reduce((prev, cur) => prev + cur, 0);
  const maxSum = arr.slice(k, arr.length).reduce((prev, cur) => prev + cur, 0);
  return [minSum, maxSum];
};

const res = findMaxAndMinSum([5, 4, 3, 2, 1], 1);
console.log(res);
