const partition = (arr, p, q) => {
  const pivotIndex = arr[p];
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

const sortArray = (arr, p, q) => {
  if (p < q) {
    const mid = partition(arr, p, q);
    sortArray(arr, p, mid - 1);
    sortArray(arr, mid + 1, q);
  }
  return arr;
};

console.log(sortArray([2, 0, 2, 1, 1, 0], 0, 5));
