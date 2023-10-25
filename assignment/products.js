/**
 * An e-commerce site tracks the purchases made each day. The product that is purchased the most one day is the featured product for the following day. If there is a tie for the product purchased most frequently, those product names are ordered alphabetically ascending and the last name in the list is chosen.
 Time Complexity - O(n * log(n))
 Space Complexity -  O(n) 
*/

const findMostFrequentProduct = (products) => {
  products.sort();

  // Dictionary
  const productsCount = {};
  products.forEach((product) => {
    productsCount[product] = (productsCount[product] || 0) + 1;
  });

  let max = 0;
  let repeatedProduct = [];

  for (let key in productsCount) {
    if (max < productsCount[key]) {
      max = productsCount[key];
    }
  }

  for (let key in productsCount) {
    if (max === productsCount[key]) {
      repeatedProduct.push(key);
    }
  }

  return repeatedProduct[repeatedProduct.length - 1];
};

const products = [
  "yellowShirt",
  "redHat",
  "blackShirt",
  "bluePants",
  "redHat",
  "pinkHat",
  "blackShirt",
  "yellowShirt",
];
const mostFrequentProduct = findMostFrequentProduct(products);
console.log("Most frequent product:", mostFrequentProduct);
