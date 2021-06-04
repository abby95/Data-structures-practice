function maxRepeating(str) {

    let len = str.length;
    count = 0
    let res = str[0];

    for (let i = 0; i < len; i++) {
        currCount = 1;
        for (let j = i + 1; j < len; j++) {
            if (str[j] === str[i]) {
                currCount++
            } else {
                break
            }
        }
        if (currCount > count) {
            count = currCount;
            res = str[i]
        }
    }

    return res

}

// console.log(maxRepeating('aaabbccbbbb'))
// console.log(maxRepeating('aaaabbcbbb'))

console.log(global)