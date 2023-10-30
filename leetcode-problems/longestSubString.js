// Given a string str, find the length of the longest substring without repeating characters.
// Input: “ABCDEFGABEF”

const longestSubstring = (str) => {
  if (str.length === 0) {
    return 0;
  }

  let uniqueChars = new Set();
  let maxChars = 0;
  let chars = "";
  let left = 0;
  let right = 0;

  while (right < str.length) {
    if (!uniqueChars.has(str[right])) {
      uniqueChars.add(str[right]);
      maxChars = Math.max(maxChars, right - left + 1);
      chars += str[right];
      right++;
    } else {
      uniqueChars.delete(str[left]);
      left++;
    }
  }

  return { maxChars, chars };
};

const res = longestSubstring("ABCDEFGABEF");
console.log(res);
