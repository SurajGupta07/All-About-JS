const findPowerOfElement = (a, n) => {
  //Small Problem
  if (n === 1) return a;
  else if (n === 0) return 1;
  else {
    //Big Problem
    // Divide
    mid = Math.floor(n / 2);
    //Conquer
    let leftPart = findPowerOfElement(a, mid);
    //Combine
    let result = leftPart * leftPart;
    //Check for even and odd element
    if (n % 2 === 0) return result;
    return result * a;
  }
};

const a = 2;
const n = 17;

const result = findPowerOfElement(a, n);
console.log("The power of element is:", result);
