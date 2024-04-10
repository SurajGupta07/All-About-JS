function sum(a, b, c) {
  console.log('Sum is called');
  return a + b + c;
}

const memoize = input => {
  const cache = new Map();
  const memoizeMethod = (...rest) => {
    const key = JSON.stringify(rest);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = input(...rest);
      cache.set(key, result);
      return result;
    }
  };

  memoizeMethod.cleanup = () => {
    cache.clear();
  };

  return memoizeMethod;
};

const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2, 3)); // returns 6 and Sum is called
console.log(memoizedSum(1, 2, 3)); // returns 6, this time sum is not called
console.log(memoizedSum(2, 3, 4)); // returns 9 and Sum is called

// memoizedSum should also have a cleanup method that can clean up the memoized data.
memoizedSum.cleanup();
memoizedSum(1, 2, 3); // returns 6 and sum is again called this time
