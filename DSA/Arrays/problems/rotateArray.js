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

const leftRotation = arr => {
  let temp = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

const array = [1, 2, 3, 4, 5];
console.log(leftRotation(array));

const rotateArrayKPlaces = (arr, k) => {
  const rotatedArray = [];
  const n = arr.length;

  for (let i = n - k; i < n; i++) {
    rotatedArray.push(arr[i]);
  }

  for (let i = 0; i < n - k; i++) {
    rotatedArray.push(arr[i]);
  }
  return rotatedArray;
};

const elements = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArrayKPlaces(elements, 3));
