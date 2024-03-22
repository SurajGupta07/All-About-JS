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

console.log(anagrams('CAT', 'ACT'));
console.log(anagrams('RULES', 'LESRT'));
