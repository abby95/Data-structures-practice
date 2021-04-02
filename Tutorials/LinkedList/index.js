class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        let newHeadNode = new Node(data);
        if (this.head === null) {
            this.head = newHeadNode
        } else {
            newHeadNode.next = this.head;
            this.head = newHeadNode
        }
    }

    viewLinkedList() {

        let TraverseString = "";

        if (this.head === null) {
            console.log("Empty List")
        } else {
            let currNode = this.head;

            while (currNode.next !== null) {
                TraverseString += `${currNode.data} ---->  `;
                currNode = currNode.next
            }
            TraverseString += `${currNode.data} ---->  `;


        }

        console.log(TraverseString + "null")
    }

    size() {
        let size = 0;

        if (this.head === null) {
            console.log("Size is :", size)
        } else {
            let currNode = this.head;
            // size++;
            while (currNode) {
                size++
                currNode = currNode.next
            }
        }
        console.log("Size is :", size)

    }

    getAt(index) {
        if (this.head === null) {
            return null
        } else {
            let currNode = this.head;
            let counter = 0

            while (currNode) {
                if (counter === index) {
                    return currNode
                }

                counter++;
                currNode = currNode.next
            }
        }
    }
}


var list = new LinkedList();


list.insertFirst(20)
list.insertFirst(30)
list.insertFirst(40)
list.insertFirst(50)
list.insertFirst('HEllo')

console.log("Get Node at Index 3::: " + JSON.stringify(list.getAt(3)))
list.viewLinkedList();
list.size()
