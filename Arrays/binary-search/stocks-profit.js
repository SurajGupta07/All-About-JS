/**
 * @company : Amazon, Microsoft
 * @inputSample : [7,1,5,3,6,4] -> stock prices
 * @outputSample : 5
 * @Question : Given an array of stock prices what is the max profit a person can make
 */

const findmaxProfit = price => {
  let maxprofit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < price.length; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];
    } else if (price[i] - minPrice > maxprofit) {
      maxprofit = price[i] - minPrice;
    }
  }
  return maxprofit;
};

const price = [7, 1, 5, 3, 6, 4];
const maxProfit_value = findmaxProfit(price);
console.log('The maximum profit of buying and selling the stocks is:', maxProfit_value);
