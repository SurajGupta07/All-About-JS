//Count Digits
const countDigits = (n) => {
  let x = n;
  let count = 0;
  while (x != 0) {
    x = Math.floor(x / 10);
    count++;
  }
  return count;
};

const res = countDigits(10201);
console.log(res);

//Reverse a Number
const reverseNumber = (num) => {
  let x = num;
  let reverse = 0;
  while (x != 0) {
    let digit = x % 10;
    reverse = reverse * 10 + digit;
    x = Math.floor(x / 10);
  }
  return reverse;
};

const reversedNumber = reverseNumber(123);
console.log(reversedNumber);

//Palindrome
const isPalindrome = (n) => {
  const originalNumber = n;
  const reversedNumber = reverseNumber(n);
  if (originalNumber === reversedNumber) {
    console.log("Is Palindrom");
  } else {
    console.log("Not Palindrom");
  }
};

isPalindrome(121);

//Armstrong number
const armstrong = (num) => {
  let tempNum = num;
  let sum = 0;
  const length = num.toString().length;
  while (tempNum != 0) {
    let digit = tempNum % 10;
    sum += Math.pow(digit, length);
    tempNum = Math.floor(tempNum / 10);
  }
  if (sum == num) {
    console.log(`${num} is Armstrong number`);
  } else {
    console.log(`${num} is not Armstrong number`);
  }
};

armstrong(153);

//Print Divisors
const divisors = (n) => {
  console.log("The Divisors of " + n + " are:");
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
      if (i !== n / i) {
        process.stdout.write(n / i + " ");
      }
    }
  }
  console.log("\n");
};

divisors(36);
