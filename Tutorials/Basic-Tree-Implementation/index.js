class Node {
    constructor(data) {
        this.data = data;
        this.children = []
    }

    add(data) {
        let node = new Node(data)
        this.children.push(node)
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data)
    }
}


class Tree {
    constructor() {
        this.root = null
    }

    BreadthFirstTraversal(fn) {
        let arr = [this.root];
        let TraversedArr = [];
        while (arr.length) {
            let node = arr.shift();
            TraversedArr.push(node.data)
            arr.push(...node.children)
            fn(node);
        }

        console.log(JSON.stringify(TraversedArr, null, 2))
    }

    TraverseDF(fn) {
        const arr = [this.root];
        let TraversedArr = [];
        while (arr.length !== 0) {
            let node = arr.shift();
            TraversedArr.push(node)
            console.log(node.data)
            arr.unshift(...node.children)
            // console.log(TraversedArr)
            console.log("=========NEXT==========")

        }
        // console.log("DFS:::", JSON.stringify(TraversedArr, null, 2))
    }
}

var A = new Node(20);
var B = new Node(30);
var C = new Node(40);
var D = new Node(50);

A.add(B);
A.add(C);
A.add(D);

B.add(10);
B.add(11);
B.add(12);

C.add(15);
D.add(75);
// console.log(JSON.stringify(A, null, 2))

var tree = new Tree();
tree.root = A

// tree.BreadthFirstTraversal(fn)



// tree.BreadthFirstTraversal((fn) => {
//     console.log(fn)
// })


tree.TraverseDF((fn) => {
    console.log(fn)
})

