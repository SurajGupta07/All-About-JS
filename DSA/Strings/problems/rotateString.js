const rotateString = (s, goal) => {
  let pointer = 0;
  let result = false;
  while (pointer <= goal.length && !result) {
    pointer++;
    const leftSideSlice = s.slice(0, pointer);
    const rightSideSlice = s.slice(pointer, s.length);
    result = rightSideSlice + leftSideSlice === goal;
  }
  return result;
};

console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));
