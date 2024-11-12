const removeOuterParentheses = str => {
  let string = '';
  let depth = 0;

  for (char of str) {
    if (char === '(') {
      if (depth > 0) string += char;
      depth++;
    } else {
      depth--;
      if (depth > 0) string += char;
    }
  }
  return string;
};

console.log(removeOuterParentheses('(()())(())'));
// console.log(removeOuterParentheses('(()())(())(()(()))'));
// console.log('Parenthese ==>', removeOuterParentheses('()()'));
