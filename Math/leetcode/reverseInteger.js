const reverse = x => {
  if (x === 0) return 0;

  let xString = x.toString();
  let temp = '';

  let isNegative = false;

  if (xString[0] === '-') {
    isNegative = true;
    xString = xString.slice(1);
  }

  for (let i = xString.length - 1; i >= 0; i--) {
    if (xString[i] === '0' && temp === '') {
      continue;
    }
    temp += xString[i];
  }

  if (isNegative) {
    temp = '-' + temp;
  }

  return parseInt(temp);
};

const result = reverse(122);
console.log(result);
