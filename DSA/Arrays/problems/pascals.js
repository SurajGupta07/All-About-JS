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

var beautySum = function (s) {
  let count = 0
  let subStr = []
  for (let i = count+1; i < s.length+1; i++) {
      subStr.push(s.slice(count,i))
      console.log(i,s.length)
      if(i===s.length-1){
          count++
      }
  }
  console.log(subStr,count)
};

