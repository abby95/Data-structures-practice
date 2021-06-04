/*
LOGIC:

Pick a Pivot

All Elements smaller than Pivot => Push it to Left Array
All Elements greater than Pivot => Push it to Right Array

Call QuickSort Function Recursively as (...QuickSort(leftArr),pivot,...QuickSort(rightArr))

*/
function QuickSort(array) {
    // Base Condition
    if (array.length === 1) {
        return array
    }
    let pivot = array[array.length - 1]
    let leftArr = [];
    let rightArr = [];


    for (let i = 0; i < array.length - 1; i++) { //We Dont Want to consider the last element as it is the PIVOT
        if (array[i] < pivot) {
            leftArr.push(array[i])
        } else {
            rightArr.push(array[i])
        }
    }

    if (leftArr.length && rightArr.length) {
        return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)]
    } else if (leftArr.length === 0) {
        return [pivot, ...QuickSort(rightArr)]
    } else {
        return [...QuickSort(leftArr), pivot]

    }

}

let arr = [8, 1, 23, 7, 43, 0, 178, 200, 12, 0, 9]

console.log(QuickSort(arr))