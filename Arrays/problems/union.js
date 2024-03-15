const unionOfArrays = (arr1, arr2) => {
    let i = 0; j = 0;
    let uniqueArr = []
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            if(uniqueArr[uniqueArr.length - 1] !== arr1[i]) 
            uniqueArr.push(arr1[i])
            i++
        } else {
            if(uniqueArr[uniqueArr.length - 1] !== arr2[j]) 
            uniqueArr.push(arr2[j])
            j++
        }
    }

    return uniqueArr;
}

console.log(unionOfArrays([1,2,3,4,5], [2,3,4,4,5]))