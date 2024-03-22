const suraj = {
  name: 'Suraj',
  city: 'Bengaluru',
};

let printUserDetails = function (state, country) {
  console.log(`${this.name} from ${this.city}, ${state} in ${country}`);
};

Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};

printUserDetails.myCall(suraj, 'Karnataka', 'India');
