Array.prototype.myMap = function (logic) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(logic(this[i]));
  }
  return arr;
};
