const findFirstCheck = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  const target = 1;
  const mid = left + (right - 1) / 2;

  while (left < right) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] <= target) {
      return (left = left + 1);
    } else right = right - 1;
  }

  return false;
};

const arr = [0, 0, 0, 1, 1, 1, 1, 1, 1];
const res = findFirstCheck(arr);
