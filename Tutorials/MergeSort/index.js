const { Console } = require("console");

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    let center = Math.floor(arr.length / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {

    let result = [];
    // Left and right in the parameters are two sorted arrays
    // We need to create a new RESULTS Array which compares elements from both the arrays and forms SORTED RESULTS Array

    while (left.length && right.length) {
        let i = 0

        if (left[i] < right[i]) {
            result.push(left.shift());


        }
        if (right[i] < left[i]) {
            result.push(right.shift());


        }
        i++

    }
    if (left.length) {
        result.push(...left)
    } else {
        result.push(...right)
    }

    return result



}

console.log(mergeSort([-30, -40, 20, 50, 12, 10]))
