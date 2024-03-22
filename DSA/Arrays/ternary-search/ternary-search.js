/**
 * @company : Adobe
 * @questions : Ternary search on sorted array
 * @timeComplexity : O(log3(n))
 */

const ternarySearch = (arr, target, left, right) => {
  //If the right side of array is smaller than the left, then the element doesn't exist in the array
  if (right >= left) {
    //Find the two mid points to divide the array into three parts
    let mid1 = Math.floor(left + (right - left) / 3);
    let mid2 = Math.floor(right - (right - left) / 3);

    //We check both the mid point to see if it is the target element
    if (arr[mid1] === target) return mid1;
    else if (arr[mid2] === target) return mid2;

    //First part of the array
    if (target < arr[mid1]) {
      return ternarySearch(arr, target, left, mid1 - 1);
    } else if (target > arr[mid2]) {
      //Third part of the array
      return ternarySearch(arr, target, mid2 + 1, right);
    } else return ternarySearch(arr, target, mid1 + 1, mid2 - 1); //Second part of the array
  }
  return -1;
};

const arr = [1, 2, 10, 25, 34, 56, 65, 89];
const target = 56;
let left = 0;
let right = arr.length - 1;
const result = ternarySearch(arr, target, left, right);
console.log(result);
