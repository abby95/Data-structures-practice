function maxRepeating(str) {
    let len = str.length;
    let count = 0;

    // Find the maximum repeating character
    // starting from str[i]
    let res = str[0];
    for (let i = 0; i < len; i++) {
        let cur_count = 1;
        for (let j = i + 1; j < len; j++) {
            if (str[i] != str[j])
                break;
            cur_count++;
        }

        // Update result if required
        if (cur_count > count) {
            count = cur_count;
            res = str[i];
        }
    }
    return res;
}

str = "aaaabbcbbb"
console.log(maxRepeating(str))