const nextPermutation = arr => {
  if (arr.length <= 1) return arr; // Base case: If array length is 0 or 1, return the array

  // Find the largest index i such that arr[i] < arr[i + 1]
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  if (i === -1) return arr.reverse(); // No need to reverse since it's already the last permutation

  // Find the largest index j greater than i such that arr[j] > arr[i]
  let j = arr.length - 1;
  while (arr[j] <= arr[i]) {
    j--;
  }

  // Swap the elements at indices i and j
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // Reverse the elements from index i + 1 to the end of the array
  let start = i + 1;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
};

console.log(nextPermutation([1, 3, 2]));
console.log(nextPermutation([3, 2, 1]));
