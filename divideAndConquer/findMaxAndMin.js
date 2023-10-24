// Recurrence Relation : T(n) = 2T(n/2) + c
// Using master's theorem: T(n) = O(n)
// Method Definition of MaxandMin function
const findMaxAndMin = (arr, i, j) => {
  let max_val;
  let min_val;

  if (i === j) {
    // small problem - c
    // single element condition
    max_val = arr[i];
    min_val = arr[j];
  } else if (i === j - 1) {
    // two element condition
    if (arr[i] < arr[j]) {
      max_val = arr[j];
      min_val = arr[i];
    } else {
      max_val = arr[i];
      min_val = arr[j];
    }
  } else {
    // big problem -> n > 2
    // 1. Divide and Conquer approach
    // 1. Divide - c
    const mid = Math.floor((i + j) / 2);
    // 2. Recursion -> Conquer - 2T(n/2)
    const recOne = findMaxAndMin(arr, i, mid);
    const recTwo = findMaxAndMin(arr, mid + 1, j);
    // 3. Combine
    // To find the final maxima - c
    recOne.max_val < recTwo.max_val
      ? (max_val = recTwo.max_val)
      : (max_val = recOne.max_val);
    // To find the final minima
    recOne.min_val < recTwo.min_val
      ? (min_val = recOne.min_val)
      : (min_val = recTwo.min_val);
  }
  return { max_val, min_val };
};

// Driver Code
const arr = [20, 39, 45, 65, 21, 44, 89, 95];
// i indicates the starting index
let i = 0;
// j indicates the ending index
let j = arr.length - 1;
const { max_val, min_val } = findMaxAndMin(arr, i, j);
console.log("Maximum:", max_val);
console.log("Minimum:", min_val);
