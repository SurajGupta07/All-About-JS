const rearrangeArray = arr => {
  let positives = arr.filter(ele => ele > 0);
  let negatives = arr.filter(ele => ele < 0);
  let output = [];

  for (let i = 0; i < positives.length; i++) {
    output.push(positives[i]);
    output.push(negatives[i]);
  }
  return output;
};

console.log(rearrangeArray([1, 2, -4, -5]));
console.log(rearrangeArray([1, 2, -3, -1, -2, 3]));
