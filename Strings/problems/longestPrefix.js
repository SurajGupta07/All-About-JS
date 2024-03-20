const longestPrefix = (arrayOfStrings) => {
    let prefix = arrayOfStrings[0];
    let length = prefix.length;

    for(let i = 0; i < arrayOfStrings.length; i++) {
        let str = arrayOfStrings[i];
        while(str.substring(0, length) !== prefix) {
            length--;
            if(length === 0) return '';
            prefix = prefix.substring(0, length);
        }
    }
    return prefix;
}

console.log(longestPrefix(["flower","flight","fly"]))