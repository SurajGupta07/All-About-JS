// function definition of merge sort
// Approach -> Divide and Conquer
// Recurrence Relation -> 2T(N/2) + N
// Time complexity -> O(NlogN)

// MergeProcedure time complexity = O(N)
const mergeProcedure = (arr, i, mid, j) => {
  // nL -> number of elements in the left subarray(i, mid)
  let nL = mid - i + 1;
  // nR -> number of elements in the right subarray(mid+1, j)
  let nR = j - mid;

  //   intialization of left and right subarray
  let leftSubarray = new Array(nL);
  let rightSubarray = new Array(nR);

  for (let m = 0; m < nL; m++) {
    leftSubarray[m] = arr[i + m];
  }

  for (let n = 0; n < nR; n++) {
    rightSubarray[n] = arr[mid + 1 + n];
  }

  let p = 0;
  let q = 0;
  let k = i;

  // returning a sorted subarray
  while (p < nL && q < nR) {
    if (leftSubarray[p] <= rightSubarray[q]) {
      arr[k] = leftSubarray[p];
      p += 1;
    } else {
      arr[k] = rightSubarray[q];
      q += 1;
    }
    k += 1;
  }

  // copy the entire elements from the left subarray
  while (p < nL) {
    arr[k] = leftSubarray[p];
    p += 1;
    k += 1;
  }

  //copy the entire elements from the right subarray
  while (q < nR) {
    arr[k] = rightSubarray[q];
    q += 1;
    k += 1;
  }
};

const mergeSort = (arr, i, j) => {
  if (i < j) {
    // Divide
    const mid = Math.floor(i + (j - i) / 2);
    //Conquer
    // recursive call -> left subtree
    mergeSort(arr, i, mid);
    // recursive call -> right subtree
    mergeSort(arr, mid + 1, j);
    // Combine -> mergeProcedure(function calling)
    mergeProcedure(arr, i, mid, j);
  }
  return arr;
};

const arr = [50, 70, 65, 13, 80, 62, 98, 27];
// starting index
const i = 0;
// ending index
const j = arr.length - 1;
const result = mergeSort(arr, i, j);
console.log(result);
