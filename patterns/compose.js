const add = x => x + 5;
const multiply = x => x * 2;
const subtract = x => x - 1;

const compose = (...functions) => {
  return input => {
    return functions.reduce((acc, fn) => {
      return fn(acc);
    }, input);
  };
};

const compositeFunction = compose(add, multiply, subtract);
console.log(compositeFunction(2));
