const maxConsecutiveOnes = arr => {
  let count = 0;
  let maxCount = 0;
  for (let element of arr) {
    if (arr[element] === 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
};

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
