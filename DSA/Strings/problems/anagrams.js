const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const hashMap = new Map();

  for (let char of str1) {
    hashMap.set(char, (hashMap.get(char) || 0) + 1);
  }

  for (let c of str2) {
    if (!hashMap.get(c) || hashMap.get(c) === 0) {
      return false;
    }
    hashMap.set(c, hashMap.get(c) - 1);
  }

  return true;
};

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const stringMap = {};

  for (let i = 0; i < str1.length; i++) {
    if (stringMap[str1[i]]) {
      stringMap[str1[i]] += 1;
    } else {
      stringMap[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (stringMap[str2[i]]) {
      stringMap[str2[i]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(anagrams('CAT', 'ACT'));
console.log(anagrams('RULES', 'LESRT'));
console.log(anagram('aacc', 'ccac'));
