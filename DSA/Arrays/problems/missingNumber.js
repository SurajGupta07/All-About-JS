const missingNumber = arr => {
  arr.sort((a, b) => a - b);
  if (arr[0] !== 0) return 0;
  if (arr[arr.length - 1] !== arr.length) return arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return i;
  }
};

console.log(missingNumber([0, 1, 2, 4, 5]));
