/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = [...nums1, ...nums2];

  const mergeProcedure = (arr, i, mid, j) => {
    const nL = mid - i + 1;
    const nR = j - mid;

    const leftSubArray = new Array(nL);
    const rightSubArray = new Array(nR);

    for (let m = 0; m < nL; m++) {
      leftSubArray[m] = arr[i + m];
    }

    for (let n = 0; n < nR; n++) {
      rightSubArray[n] = arr[mid + 1 + n];
    }

    let p = 0;
    let q = 0;
    let k = i;

    while (p < nL && q < nR) {
      if (leftSubArray[p] < rightSubArray[q]) {
        arr[k] = leftSubArray[p];
        p += 1;
      } else {
        arr[k] = rightSubArray[q];
        q += 1;
      }
      k += 1;
    }

    while (p < nL) {
      arr[k] = leftSubArray[p];
      p += 1;
      k += 1;
    }

    while (q < nR) {
      arr[k] = rightSubArray[q];
      q += 1;
      k += 1;
    }
  };

  const mergeSort = (arr, i, j) => {
    if (i < j) {
      const mid = Math.floor(i + (j - i) / 2);
      mergeSort(arr, i, mid);
      mergeSort(arr, mid + 1, j);
      mergeProcedure(arr, i, mid, j);
    }
    return arr;
  };
  mergeSort(mergedArray, 0, mergedArray.length - 1);

  const n = mergedArray.length;
  const mid = Math.floor(n / 2);

  if (n % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
};

const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
