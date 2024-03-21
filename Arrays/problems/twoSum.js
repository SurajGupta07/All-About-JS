const hasPairWithSum = (arr, target) => {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (hashMap.has(complement)) {
      return [arr[hashMap.get(complement)], arr[i]];
    }
    hashMap.set(arr[i], i);
  }
};

console.log(hasPairWithSum([2, 7, 15, 11], 18));

const twoSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else if (arr[left] + arr[right] === target) {
      return [left, right];
    } else return [-1, -1];
  }
};

console.log(twoSum([2, 6, 5, 8, 11], 14));
