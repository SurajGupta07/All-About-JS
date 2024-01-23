const palindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-zA-Z]/g, "");
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

console.log(palindrome("race a car"));
console.log(palindrome("A man, a plan, a canal: Panama"));
