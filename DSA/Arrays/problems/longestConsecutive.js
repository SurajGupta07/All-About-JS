const longesConsecutive = arr => {
  const set = new Set(arr);
  let longest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i] - 1)) {
      let count = 1;
      let j = arr[i];
      while (set.has(j + 1)) {
        j++;
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};

console.log(longesConsecutive([100, 200, 1, 3, 2, 4]));
console.log(longesConsecutive([3, 8, 5, 7, 6]));
console.log(longesConsecutive([12, 13, 14, 4, 5, 6]));
