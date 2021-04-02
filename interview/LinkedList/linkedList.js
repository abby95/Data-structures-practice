// import { Node } from "./Node"
// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }
// import Node from "./NodeClass"
var Node = require("./NodeClass")


class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        if (this.head === null) {
            this.head = new Node(data);
            return
        }

        let currNode = this.head;

        while (currNode.next) {
            currNode = currNode.next
        }

        currNode.next = new Node(data)

        return

    }

    insertFirst(data) {
        let newFirstNode = new Node(data, this.head);
        this.head = newFirstNode
    }

    view() {
        if (this.head === null) {
            return "Empty List"
        }

        let Traversal = "";
        let currNode = this.head

        while (currNode) {
            Traversal += ` ${currNode.data} ---->`;
            currNode = currNode.next
        }
        Traversal += " NULL"
        return Traversal
    }

    insertAt(index, data) {
        if (this.head == null) {
            this.head = new Node(data)
            return
        }
        let counter = 0;
        let currNode = this.head;

        while (currNode) {
            currNode = currNode.next;
            // console.log("Test::", currNode)
            counter++

            if (counter === index) {
                console.log(currNode)
                console.log("Index Reached")
                let newNode = new Node(data);
                newNode.next = currNode.next
                currNode.next = newNode;
                return;
            }
        }

        console.log("Index Out Of Bound")

        return null

    }

    deleteAt(index) {
        if (this.head === null) {
            return "Empty List"
        }
        let counter = 0;
        let currNode = this.head;

        while (currNode) {
            counter++;
            currNode = currNode.next;
            if (counter === index - 1) break;
        }

        let nodeToDelete = currNode.next;
        currNode.next = currNode.next.next

        return nodeToDelete

    }
}

module.exports = LinkedList 
