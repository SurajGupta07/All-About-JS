const longestSubArray = (arr, k) => {
  let i = 0,
    j = 0;
  let maxLength = 0;
  let sum = arr[0];

  while (j < arr.length) {
    if (sum === k) {
      maxLength = Math.max(maxLength, j - i + 1);
    }

    if (sum <= k) {
      j++;
      sum += arr[j];
    } else {
      i++;
      sum -= arr[i];
    }
  }

  return maxLength;
};

console.log(longestSubArray([2, 3, 5, 1, 9], 10));
