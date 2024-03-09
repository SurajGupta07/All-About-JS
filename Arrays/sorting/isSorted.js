const isArraySorted = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
       if(arr[i] > arr[i + 1]) {
        return false
       }
    }
    return true
}

console.log(isArraySorted([12, 13, 14, 15, 22]))
