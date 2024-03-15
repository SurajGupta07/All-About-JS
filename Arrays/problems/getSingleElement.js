const getSingleElement = (arr) => {
    let element = 0
    for(let e of arr) {
        element ^= e
    }

    return element
}

console.log(getSingleElement([2,3,2,3,1]))
console.log(getSingleElement([4,1,2,1,2]))