function multiply(a, b) {
  return a * b;
}

let multipleByTwo = multiply.bind(this, 10, 20);

console.log(multipleByTwo());

function curryAdd(firstNum) {
  return function (secondNum) {
    console.log(firstNum + secondNum);
  };
}

curryAdd(10)(5);
