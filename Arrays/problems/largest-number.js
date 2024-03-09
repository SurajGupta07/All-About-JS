//Find the Largest element in an array

const findLargestElement = (arr) => {
    let maxElement = arr[0]
    for(const element of arr) {
       if(element > maxElement) {
        maxElement= element
       }
    }
    return maxElement
}

const arr = [20, 40, 12, 11, 13]
const res = findLargestElement(arr)
console.log(res)

const secondLargestElement = (array) => {
    let largest = 0;
    let secondLargest = 0;

    for(const element of array) {
        if(element > largest) {
            secondLargest = largest;
            largest = element
        } else if (element > secondLargest && element !== largest) {
            secondLargest = element
        }
    }
    return secondLargest

}

const result = secondLargestElement([20, 40, 12, 11, 13, 0])
console.log(result)