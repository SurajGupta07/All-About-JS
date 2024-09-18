const getSingleElement = arr => {
  let element = 0;
  for (let e of arr) {
    element ^= e;
  }
  return element;
};

console.log(getSingleElement([2, 3, 2, 3, 1]));
console.log(getSingleElement([4, 1, 2, 1, 2]));

const getSingleElementA2 = arr => {
  let countObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (countObj[arr[i]]) {
      countObj[arr[i]]++;
    } else {
      countObj[arr[i]] = 1;
    }
  }
  for (let key in countObj) {
    if (countObj[key] === 1) {
      return key;
    }
  }
};

console.log(getSingleElementA2([4, 1, 2, 1, 2]));
console.log(getSingleElementA2([2, 2, 1]));
