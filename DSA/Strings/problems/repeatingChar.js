const firstNonRepeatingChar = str => {
  const hashMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (hashMap.has(str[i])) {
      hashMap.set(str[i], hashMap.get(str[i]) + 1);
    } else {
      hashMap.set(str[i], 1);
    }
  }

  for (let element of str) {
    if (hashMap.get(element) === 1) {
      return element;
    }
  }
};

console.log(firstNonRepeatingChar('testei'));
