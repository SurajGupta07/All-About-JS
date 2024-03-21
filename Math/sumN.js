// Sum of first N Natural Numbers

const sumOfNumbers = n => {
  let sum = 0;
  while (n > 0) {
    sum += n;
    sumOfNumbers(n - 1);
    n -= 1;
  }
  return sum;
};

const res = sumOfNumbers(7);
console.log(res);
