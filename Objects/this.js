const calc = {
  total: 0,
  add: function add(value) {
    this.total += value;
    return this;
  },
  subtract: function subtract(value) {
    this.total -= value;
    return this;
  },
};

const result = calc.add(10).subtract(2).add(5).total;
console.log(result);
