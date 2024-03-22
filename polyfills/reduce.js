Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue;
  for (let element of this) {
    result = result ? callback(result, element) : element;
  }
  return result;
};

let arr = [2, 4, 3, 2, 1];

let res = arr.myReduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(res);
