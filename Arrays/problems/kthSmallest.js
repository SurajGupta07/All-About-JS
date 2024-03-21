/*
    ! Time Complexity:
    ! - Worst Case = O(n^2)
    ! - Average and Best Case = Theta(n)
    ! Space Complexity: O(1)
    ? Note: We are using a recursive call here so it would automatically take O(log n) space to store the function calls in a stack.
*/

const partition = (arr, p, q) => {
  let pivotIndex = arr[p];
  let i = p;
  for (let j = i + 1; j <= q; j++) {
    if (arr[j] < pivotIndex) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i], arr[p]] = [arr[p], arr[i]];
  return i;
};

// *This function is reposnible for finding the k-th smallest term. If the Kth smallest Index is greater than the length f the array then it returns the highest index of the sorted array.
const findKSmallest = (nums, kSmallestIndex, lb, ub) => {
  if (lb === ub && lb === kSmallestIndex - 1) return nums[lb];
  if (lb < ub) {
    const pivot = partition(nums, lb, ub);
    const requiredIndex = kSmallestIndex - 1;
    // *If the pivot returned i.e. the index that has been put in its correct place is returned is equivalent to k-th smallest term we return the number at that particular index.
    if (pivot === requiredIndex) return nums[kSmallestIndex - 1];
    // *If the pivot returned is actually less than that of the required smallest index then we need to search the larger side & we need to only call for pivot + 1 to upper bound.
    else if (pivot < requiredIndex) return findKSmallest(nums, kSmallestIndex, pivot + 1, ub);
    // *Else we know that the pivot is greater than that of he required smallest index, then we need to search the smaller side & we need to only call for lower bound upto pivot - 1.
    else return findKSmallest(nums, kSmallestIndex, lb, pivot - 1);
  }
  return nums[nums.length - 1];
};

const nums = [50, 70, 29, 67, 12, 15, 46, 100, 26, 29];
const result = findKSmallest(nums, 3, 0, nums.length - 1);
console.log(result);
