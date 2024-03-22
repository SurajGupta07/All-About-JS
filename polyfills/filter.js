Array.prototype.myFilter = function (callback) {
  let output = [];
  for (element of this) {
    callback(element) && output.push(element);
  }
  return output;
};

const arr = [3, 65, 2, 57, 1, 4, 2];
const res = arr.myFilter(item => item % 2 == 0);
console.log(res);
