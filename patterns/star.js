const patternOne = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
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

const patternTwo = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i - 1; j++) {
      row += "*";
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
