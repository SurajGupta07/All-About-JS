//Implementation of Insertion Sort
//Time Complexity -> O(n^2)

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
};

const arr = [75, 90, 100, 95, 85, 80];
const result = insertionSort(arr);
console.log(insertionSort([75, 90, 100, 95, 85, 80]));
