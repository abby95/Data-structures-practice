function insertionSort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + i; j > 0; j--) {
            if (a[j] < a[j - 1]) {
                [a[j], a[j - 1]] = [a[j - 1], a[j]]
            }
        }
    }
    return a
}


const arr = [4, 56, 1, 9, 3, 0, -23, 100, 21, 1, 0, 321]
console.log(insertionSort(arr))