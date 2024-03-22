const isomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (obj[charS] === undefined) {
      obj[charS] = charT;
    } else if (obj[charS] !== charT) {
      return false;
    }
  }
  return true;
};

console.log(isomorphic('egg', 'add'));
console.log(isomorphic('foo', 'bar'));
console.log(isomorphic('paper', 'title'));
