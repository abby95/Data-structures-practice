// How to Deal with Single Promise
var p1 = function () {
    return new Promise((resolve, reject) => {

        let error = false;
        setTimeout(() => {

            if (error) {
                reject("Something went wrong....")
            } else {
                resolve("I never break my promise")
            }
        }, 3000)

    })
}

// GodPromise()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

var p2 = 100;

var p3 = Promise.resolve("Promise 3");

var p4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 4")
        }, 6000)
    })
}

Promise.all([p1, p2, p3, p4]).then(values => console.log(JSON.stringify(values)))