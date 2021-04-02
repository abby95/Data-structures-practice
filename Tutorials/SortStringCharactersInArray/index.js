let string = "ABHISHEK"

let stringArray = string.split("");
console.log(stringArray)


// Bubble Sorting 

function BubbleSort(stringArray) {
    for (let i = 0; i < stringArray.length; i++) {
        for (let j = i + 1; j < stringArray.length; j++) {
            // console.log(stringArray[j].charCodeAt(0))
            if (stringArray[j].charCodeAt(0) < stringArray[i].charCodeAt(0)) {
                [stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]]
            }
        }
    }

    console.log(stringArray)
}


BubbleSort(stringArray)