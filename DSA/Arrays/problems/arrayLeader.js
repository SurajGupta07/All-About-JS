const arrayLeader = arr => {
  let arrLeaders = [];
  let currentLeader = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > currentLeader) {
      arrLeaders.push(arr[i]);
      currentLeader = arr[i];
    }
  }

  arrLeaders.push(arr[arr.length - 1]);

  return arrLeaders;
};

console.log(arrayLeader([10, 22, 12, 3, 0, 6]));
console.log(arrayLeader([4, 7, 1, 0]));
