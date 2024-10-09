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

const longestSubArrays = (arr, k) => {
  let sum = 0,
    maxLength = 0,
    subArray = [];
  const map = new Map([[0, -1]]);

  arr.forEach((num, i) => {
    sum += num;
    const startIdx = map.get(sum - k);

    if (startIdx !== undefined && i - startIdx > maxLength) {
      maxLength = i - startIdx;
      subArray = arr.slice(startIdx + 1, i + 1);
    }

    map.set(sum, map.get(sum) ?? i);
  });

  return subArray;
};

console.log(longestSubArrays([2, 3, 5], 5));
console.log(longestSubArrays([2, 3, 5, 1, 9], 10));
