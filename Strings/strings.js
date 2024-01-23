const findFirstNonRepeatingStr = (str) => {
  let frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  console.log("Non-repeating character not found");
  return -1;
};

const res = findFirstNonRepeatingStr("teste");
console.log(res);
