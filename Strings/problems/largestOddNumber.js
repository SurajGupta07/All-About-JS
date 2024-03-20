const largestOddNumber = (num) => {
    if(Number(num.slice(-1) % 2 !== 0)) return num;
    let i = num.length - 1;

    while(i >= 0) {
        if(Number(num[i]) % 2 !== 0) return num.slice(0, i + 1)
        i--;
    }
    
    return ""
};

console.log(largestOddNumber("52"))
console.log(largestOddNumber("3002"))
console.log(largestOddNumber("4206"))
console.log(largestOddNumber("222"))
console.log(largestOddNumber("10133890"))