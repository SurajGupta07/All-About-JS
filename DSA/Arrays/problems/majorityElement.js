//Time complexity => O(n)
//Space complexity => O(1)
//Method defination of isMajorityElement
const isMajorityElement = (nums, candidate) => {
  let count = 0;
  let size = nums.length;
  for (let ele of nums) {
    if (candidate === ele) {
      count++;
    }
  }
  return count > Math.floor(size / 2);
};

//Method defination of findCandidate
const findCandidate = nums => {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    } else count += arr[i] === candidate ? 1 : -1;
  }
  return candidate;
};

const printMajorityElement = nums => {
  let candidate = findCandidate(nums);
  if (isMajorityElement(nums, candidate)) {
    console.log('Majority Element is:', candidate);
  } else {
    console.log('No Majority element exsists in an array');
  }
};

// Driver code
const nums = [2, 2, 1, 1, 1, 2, 2];
printMajorityElement(nums);
