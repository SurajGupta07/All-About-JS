const kadanes = arr => {
  let maxSum = arr[0];
  let sum = 0;

  for (element of arr) {
    sum += element;
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};

console.log(kadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
