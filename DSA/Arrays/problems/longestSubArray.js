const longestSubArray = (arr, k) => {
  let i = 0,
    j = 0;
  let maxLength = 0;
  let sum = arr[0];
  let maxArr = [];

  while (j < arr.length) {
    if (sum === k) {
      maxLength = Math.max(maxLength, j - i + 1);
      maxArr = arr.slice(i, j + 1);
    }

    if (sum <= k) {
      j++;
      sum += arr[j];
    } else {
      i++;
      sum -= arr[i];
    }
  }

  return { maxLength, maxArr };
};

console.log(longestSubArray([2, 3, 5, 1, 9], 10));
console.log(longestSubArray([2, 3, 5], 5));
console.log(longestSubArray([-1, 1, 1], 1));
