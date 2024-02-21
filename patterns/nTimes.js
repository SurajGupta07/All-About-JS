// Print Name N times using Recursion

const nTimes = (name, n) => {
  if (n <= 0) {
    return;
  }
  console.log(name);
  nTimes(name, n - 1);
};
nTimes("Suraj", 5);
