// Tree Consists of Nodes
// Each of these nodes contains some DATA and an Array of its Children
// You can create an entire tree with the Help of Node Class
// Tree Implementation Class will be helpful in adding features like Traversal

// Add and Remove Feature is Part of NODE Class as its easier to envision to add and remove child/children of nodes 


class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        // this.children.push(new Node(data))
        let node = new Node(data)
        this.children.push(node)
    }

    addNode(node) {
        // this.children.push(new Node(data))
        this.children.push(node)
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF() {
        if (this.root === null) {
            return "Empty Tree"
        }

        let arr = [];
        let traversal = ""
        arr.push(this.root)

        while (arr.length) {
            let node = arr.shift();
            traversal += node.data;
            traversal += "--->"
            arr.push(...node.children)
        }
        traversal += "END"
        return traversal;
    }

    traverseDF() {
        if (this.root === null) {
            return "Empty Tree"
        }

        let arr = [];
        let traversal = ""
        arr.push(this.root)

        while (arr.length) {
            let node = arr.shift();
            traversal += node.data;
            traversal += "--->"
            arr.unshift(...node.children)
        }
        traversal += "END"
        return traversal;
    }
}

const A = new Node(20);
const B = new Node(0);
const C = new Node(40);
const D = new Node(-15);

B.add(12);
B.add(-2);
B.add(1);
D.add(-2);
A.addNode(B);
A.addNode(C);
A.addNode(D);

// Constructing Tree
const TreeA = new Tree();

TreeA.root = A

console.log(TreeA.traverseBF())
console.log(TreeA.traverseDF())
