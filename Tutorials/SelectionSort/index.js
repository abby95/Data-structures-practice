function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp
        }
    }
    console.log(arr)
    return arr

}

selectionSort([100, -40, 500, -124, 0, 21, 7])