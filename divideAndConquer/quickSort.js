//Time complexity:
//1. Best or average case scenario : O(n logn)
// 2. Worst case scenario: O(n^2)
// Space Complexity: O(1)

//Method defination of Partition Method
const partition = (arr, p, q) => {
  const pivotIndex = arr[p];
  let i = p;
  for (let j = i + 1; j <= q; j++) {
    if (arr[j] < pivotIndex) {
      i++;
      // Swap between the values of i and j
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i], arr[p]] = [arr[p], arr[i]];
  return i;
};

// Method definition of QuickSort
const quickSort = (arr, p, q) => {
  if (p < q) {
    //Divide and Conquer Approach
    //1. Divide
    // Function calling partition method
    mid = partition(arr, p, q);
    // Recursive function call for left subtree
    quickSort(arr, p, mid - 1);
    // Recursive function call for right subtree
    quickSort(arr, mid + 1, q);
  }
  return arr;
};

// Driver code
const arr = [50, 70, 29, 67, 12, 15, 46, 100, 26, 29];
const p = 0;
const q = arr.length - 1;
const result = quickSort(arr, p, q);
console.log(result);
