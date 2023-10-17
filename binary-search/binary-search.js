/**
 * *Binary Search
 * *Given a sorted array of integers, find the index of a target value using a binary search algorithm.
 * *A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half.
 * @param {number[]} arr
 * @param {number[]} target
 * @returns {number}
 */

// Binary Search Algorithm without using recursion(iterative)
function binarySearch(arr, target, i, j) {
  while (i <= j) {
    const mid = Math.floor(i + (j - 1) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) i = mid + 1;
    else j = mid - 1;
  }
  return -1;
}

// Driver code
const arr1 = [20, 30, 40, 50, 60, 70, 80, 90];
const x1 = 80;
const i1 = 0;
const j1 = len(arr) - 1;
//  function calling
const result1 = binarySearch(arr1, x1, i1, j1);
print("Searching element is present at the location:", result1);

/**
 * @description Recursive Binary Search
 * @param {number[]} arr
 * @param {number} target
 * @param {number} i => left index
 * @param {number} j => right index
 * @returns {number}
 */

// Binary Search Algorithm using recursion
const recursiveBinarySearch = (arr, target, i, j) => {
  if (i > j) return -1;
  const mid = Math.floor(i + (j - 1) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target)
    return recursiveBinarySearch(arr, target, mid + 1, j);
  else return recursiveBinarySearch(arr, target, i, mid - 1);
};

// Driver code
const arr = [20, 30, 40, 50, 60, 70, 80, 90];
const x = 80;
const i = 0;
const j = len(arr) - 1;
//  function calling
const result = recursiveBinarySearch(arr, x, i, j);
print("Searching element is present at the location:", result);
