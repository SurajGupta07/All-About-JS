const fullName = {
  firstName: 'Suraj',
  lastName: 'Gupta',
};

//Without Arguments
const displayFullName = function () {
  console.log(this.firstName + ' ' + this.lastName);
};

Function.prototype.myBind = function (...args) {
  let obj = this;
  return function () {
    obj.call(args[0]);
  };
};

const print = displayFullName.myBind(fullName);
print();

//With multiple arguments
const displayNameAndAge = function (place, age) {
  console.log(
    this.firstName + ' ' + this.lastName + ' ' + 'from ' + place + ' ' + age + ' years old',
  );
};

Function.prototype.bindWithSingleArgument = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function () {
    obj.apply(args[0], params);
  };
};

let printMyDetails = displayNameAndAge.bindWithSingleArgument(fullName, 'Bengaluru', '25');
printMyDetails();

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
