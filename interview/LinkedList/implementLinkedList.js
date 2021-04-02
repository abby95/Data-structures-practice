
var LinkedList = require("./linkedList")

var list = new LinkedList();

// console.log(list.view());

list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.insert(7)

list.insertFirst(8)
list.insertAt(7, "newData ")
console.log(list.view());

// list.deleteAt(4) // Works

// console.log(list.view());
