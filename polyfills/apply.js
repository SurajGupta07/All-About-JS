const suraj = {
  name: 'Suraj',
  city: 'Bengaluru',
};

let printUserDetails = function (state, country) {
  console.log(`${this.name} from ${this.city}, ${state} in ${country}`);
};

Function.prototype.myApply = function (scope, args) {
  scope._this = this;
  return scope._this(...args);
};

printUserDetails.myApply(suraj, ['Karnataka', 'India']);
