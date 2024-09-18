const maxConsecutiveOnes = arr => {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 1 ? count++ : (count = 0);
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
