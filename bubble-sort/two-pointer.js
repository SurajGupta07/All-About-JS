/**
 * @company : Amazon, Google
 * @inputSample : [20, 40, 60, 80, 90, 120, 240] , 210
 * @outputSample :
 * @question : find a pair index whose sum is equal to given number
 * @solution : Two pointer method
 */

const two_sum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return { left, right };
    } else if (arr[left] + arr[right] < target) {
      left += 1;
    } else right -= 1;
  }
  return false;
};

const arr = [20, 40, 60, 80, 90, 120, 240];
const target = 210;
const result = two_sum(arr, target);
console.log(result);
