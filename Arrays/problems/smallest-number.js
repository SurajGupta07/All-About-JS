const smallestElement = arr => {
  let smallest = arr[0];
  for (let ele of arr) {
    if (ele < smallest) {
      smallest = ele;
    }
  }
  return smallest;
};

const res = smallestElement([20, 40, 12, 18, 36, 87]);
console.log(res);

const secondSmallest = arr => {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let element of arr) {
    if (element < smallest) {
      secondSmallest = smallest;
      smallest = element;
    } else if (element < secondSmallest && element !== smallest) {
      secondSmallest = element;
    }
  }
  return secondSmallest;
};

const result = secondSmallest([20, 40, 12, 18, 36, 87]);
console.log(result);
