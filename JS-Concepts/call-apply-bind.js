// let p1 = {
//     firstname: "Abhishek",
//     lastname: "Halder"
// }

// let p2 = {
//     firstname: "Pathik",
//     lastname: "Mistry"
// }

// let p3 = {
//     firstname: "Vivek",
//     lastname: "Patel"
// }


// function printName(city, age) {
//     console.log(`${this.firstname} ${this.lastname} (${age}) is from ${city}`)
// }

// // printName.call(p1, "Bangalore", 26)

// // // apply is similar to call ==> only difference is in the way we send arguments
// // printName.apply(p2, ["Navsari", 26])


// let printVivek = printName.bind(p3, "London", 30)

// console.log((printVivek.toString()))
// printVivek()




let obj1 = {
    name: "Ankita",
    from: "Sundargarh"
}

let obj2 = {
    name: "Abhishek",
    from: "Navsari"
}

function printname(company) {
    console.log(`${this.name} is from ${this.from} and works in ${company}`)
}


// printname.call(obj2, "Wipro")
// printname.call(obj1, "NetApp")

let printAbhishek = printname.bind(obj2, ["Wipro"])

// printname.bind(obj1, ["NetApp"])


console.log(console)