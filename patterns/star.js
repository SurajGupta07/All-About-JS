const patternOne = n => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += '*';
    }
    console.log(row);
  }
};

patternOne(3);

/* Output:
 ***
 ***
 ***
 */

const patternTwo = n => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i - 1; j++) {
      row += '*';
    }
    console.log(row);
  }
};

patternTwo(6);

/** Output:
 *
 **
 ***
 ****
 */

const patternThree = n => {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
};

patternThree(5);

/** Output:
1
12
123
1234
12345
 */

const patternFour = n => {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
};

patternFour(5);

/** Output:
1
22
333
4444
55555
 */

const patternFive = n => {
  for (let i = n; i > 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '*';
    }
    console.log(row);
  }
};

patternFive(5);

/** Output:
 *****
 ****
 ***
 **
 *
 */

const patternSix = n => {
  for (let i = n; i > 0; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
};

patternSix(5);

/** Output:
12345
1234
123
12
1
 */

const patternSeven = n => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += '*';
    }
    console.log(row);
  }
};

patternSeven(3);
