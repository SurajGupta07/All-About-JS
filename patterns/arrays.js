//Find Second Largest and Smallest Number in Array
//Use Bubble Sort to find largest number and Selection Sort for smallest number

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

const findMinMax = (arr) => {
  const sortedArray = bubbleSort(arr);
  const secondSmallestNumber = sortedArray[1];
  const secondLargestNumber = sortedArray[sortedArray.length - 2];
  console.log(`The smallest number is ${secondSmallestNumber}`);
  console.log(`The second largest number is ${secondLargestNumber}`);
};
const arr = [1, 2, 44, 23, 15, 12, 34, 56, 90, 87, 34];
findMinMax(arr);

//Flatten Array
const shouldBeFlattenArr = [[1, 3], [[2, 3, [4]]], [12, 15]];
const flattenArray = (arr) => {
  return arr.reduce((prevValue, curValue) => {
    if (Array.isArray(curValue)) {
      return [...prevValue, flattenArray(curValue)];
    } else {
      return [...prevValue, curValue];
    }
  }, []);
};
flattenArray(shouldBeFlattenArr);

//Reverse an Array
const reverseArrayFn = (arr) => {
  let reversedArrary = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArrary = reversedArrary.concat(arr[i]);
  }
  console.log(reversedArrary);
};

reverseArrayFn([1, 2, 3, 4, 5]);

// Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

const arrNumbers = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const output = arrNumbers.map((number) =>
  number % 2 === 0 ? number + 1 : number
);

console.log(output);

//Get the names in an array for only those who have a cycle.
const family = [
  {
    name: "Suraj",
    haveCycle: true,
  },
  {
    name: "Mark",
    haveCycle: false,
  },
  {
    name: "Garry",
    haveCycle: true,
  },
  {
    name: "Konga",
    haveCycle: false,
  },
];

const cycle = family.reduce(
  (prevValue, curValue) =>
    curValue.haveCycle ? [...prevValue, curValue.name] : prevValue,
  []
);
console.log(cycle);
