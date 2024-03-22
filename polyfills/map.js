Array.prototype.myMap = function (callback) {
  let output = [];
  for (let element of this) {
    output.push(callback(element));
  }
  return output;
};

let arr = [1, 2, 3, 4, 5];
let res = arr.myMap(item => item * 2);
console.log(res);
