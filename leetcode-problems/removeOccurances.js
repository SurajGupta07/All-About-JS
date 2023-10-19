//Companies => Microsoft
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

/** 
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums =[0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

const removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k += 1;
    }
  }
  return { count: k, nums };
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const result = removeElement(nums, 2);
console.log(result);
