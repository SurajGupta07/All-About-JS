const numberOfWays = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else if (n === 2) return 2;
  else {
    // Recursion
    return numberOfWays(n - 1) + numberOfWays(n - 2);
  }
};

const n = 7;
const result = numberOfWays(n);
console.log(
  "The Number of ways a person can reach to the top of stairs is:",
  result
);
