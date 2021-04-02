function merge(left_sorted, right_sorted) {
    let result = [];
    while (left_sorted.length && right_sorted.length) {
        if (left_sorted[0] < right_sorted[0]) {
            result.push(left_sorted.shift())
        } if (right_sorted[0] < left_sorted[0]) {
            result.push(right_sorted.shift())
        }
    }

    return [...result, ...left_sorted, ...right_sorted]

}

module.exports = merge;