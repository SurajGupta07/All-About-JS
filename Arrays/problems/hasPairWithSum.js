const hasPairWithSum = (arr, target) => {
    const hashMap = new Map()

    for(let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]
        if(hashMap.has(complement)) {
            return [arr[hashMap.get(complement)], arr[i]]
        }
        hashMap.set(arr[i], i)
    }

}

console.log(hasPairWithSum([2, 7, 15, 11], 18))