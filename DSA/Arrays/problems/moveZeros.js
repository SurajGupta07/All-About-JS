const moveZeroesToEnd = arr => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
  }
  return arr;
};

console.log(moveZeroesToEnd([1, 0, 2, 3, 0, 4, 0, 1]));

const moveZeroes = arr => {
  let j;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
};
console.log(moveZeroes([1, 0, 2, 3, 0, 4, 0, 1]));
