const countStringsMap = (arr) => {
    const hashMap = new Map()

    for(let element of arr) {
        if(hashMap.has(element)) {
            hashMap.set(element, hashMap.get(element) + 1)
        } else {
        hashMap.set(element, 1)
        }
    }

    return hashMap
}

const countStrings = (arr) => {
    let count = {};
    for(let element of arr) {
        count[element] = count[element] ? count[element] + 1 : 1
    }
    return count
}

console.log(countStringsMap(['hello', 'age', 'name', 'country', 'hello']))
console.log(countStrings(['hello', 'age', 'name', 'country', 'hello']))