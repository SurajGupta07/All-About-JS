const missingNumber = arr => {
  let total = (arr.length * (arr.length + 1)) / 2;
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
  }
  return total - sum;
};

console.log(missingNumber([1, 2, 0, 4, 5]));
