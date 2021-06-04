function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
            // 
            if (arr[min] !== arr[i]) {
                [arr[min], arr[i]] = [arr[i], arr[min]]
            }
        }
    }

    return arr
}

const arr = [4, 56, 1, 9, 3, 0, -23, 100, 21, 1, 0, 321]
console.log(selectionSort(arr))