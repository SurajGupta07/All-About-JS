/**
 * @company : Amazon, Microsoft
 * @inputSample : [7,1,5,3,6,4] -> stock prices
 * @outputSample : 5
 * @Question : Given an array of stock prices what is the max profit a person can make
 */

const findmaxProfit = price => {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let element of price) {
    if (element < minPrice) {
      minPrice = element;
    } else if (element - minPrice > maxProfit) {
      maxProfit = element - minPrice;
    }
  }
  return maxProfit;
};

const price = [7, 1, 5, 3, 6, 4];
const maxProfit_value = findmaxProfit(price);
console.log('The maximum profit of buying and selling the stocks is:', maxProfit_value);
