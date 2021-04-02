var merge = require("./merge")

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let center = Math.floor(arr.length / 2)

    let left_arr = arr.slice(0, center)
    let right_arr = arr.slice(center) //From Center Index till End

    return merge(mergeSort(left_arr), mergeSort(right_arr))
}

console.log(mergeSort([10, 20, 2, 5, 1, 9, 16]))