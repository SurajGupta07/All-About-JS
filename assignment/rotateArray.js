const reverseArray = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

const rotateArray = (arr, k) => {
  const n = arr.length;
  k = k % n;
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, n - 1);
  return arr;
};

const res = rotateArray([1, 2, 3, 4, 5], 2);
console.log(res);
