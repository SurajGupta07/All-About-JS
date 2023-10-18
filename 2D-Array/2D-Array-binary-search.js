/**
 * @company : Amazon
 * @question : find if a number exists in a matrix of sorted rows
 */

const search2DArray = (arr, target) => {
  const m = arr.length;
  if (m === 0) return false;

  const n = arr[0].length;
  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - 1) / 2);
    const mid_element = arr[Math.floor(mid / n)][Math.floor(mid % n)];

    if (target === mid_element) {
      return true;
    } else if (target < mid_element) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return false;
};

const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 6;
const result = search2DArray(arr, target);
console.log(result);
