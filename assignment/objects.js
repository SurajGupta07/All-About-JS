//Invert Key Value of Object

const invertKeyValuObject = (object) => {
  let result = {};
  for (let key in object) {
    result[object[key]] = key;
  }
  return result;
};

const obj = { age: 12, name: "xyz", hairColor: "black" };
console.log(invertKeyValuObject(obj));
