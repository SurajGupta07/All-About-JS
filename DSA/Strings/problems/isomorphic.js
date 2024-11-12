const isomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if ((charS in sMap && sMap[charS] !== charT) || (charT in tMap && tMap[charT] !== charS)) {
      return false;
    }
    sMap[charS] = charT;
    tMap[charT] = charS;
  }
  return true;
};

console.log(isomorphic('egg', 'add'));
console.log(isomorphic('foo', 'bar'));
console.log(isomorphic('paper', 'title'));
console.log(isomorphic('badc', 'baba'));
