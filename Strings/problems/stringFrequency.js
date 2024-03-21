const stringFrequency = arr => {
  const hashMap = new Map();
  for (let element of arr) {
    if (hashMap.has(element)) {
      hashMap.set(element, hashMap.get(element) + 1);
    } else {
      hashMap.set(element, 1);
    }
  }
  const maxCount = Math.max(...hashMap.values());
  return new Map([...hashMap].filter(([key, value]) => value === maxCount));
};

console.log(stringFrequency(['a', 'b', 'c', 'd', 'a', 'c']));
