// Function Currying::
// Change Callable from something like f(a,b) to f(a)(b)

// Example Code:

let sum = function (a) {

    return function (b) {
        if (b) {
            return sum(a + b)
        } else {
            return a
        }
    }
}

console.log(sum(3)(4)(5))