const pascalsTriangle = number => {
  let arr = [];

  for (let i = 0; i < number; i++) {
    arr[i] = [];
    arr[i][0] = 1;
    arr[i][i] = 1;
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
  return arr;
};

console.log(pascalsTriangle(5));
