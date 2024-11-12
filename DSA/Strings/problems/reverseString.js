const reverseString = str => {
  const output = str.split(' ').filter(s => s);
  let j = output.length - 1;
  for (let i = 0; i < Math.floor(output.length / 2); i++) {
    [output[i], output[j]] = [output[j], output[i]];
    j--;
    if (i === j) return output.join(' ');
  }
  return output.join(' ');
};

console.log(reverseString('the     sky is blue'));
console.log(reverseString('a     good example'));
