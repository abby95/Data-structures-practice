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

    insert(data) {
        if (this.head === null) {
            this.head = new Node(data)
            return
        }

        let currNode = this.head;

        while (currNode.next) {
            currNode = currNode.next
        }
        currNode.next = new Node(data)
    }

    view() {
        if (this.head === null) {
            return "Empty List"
        }

        let currNode = this.head;
        let list = "[HEAD]"
        while (currNode) {
            list += `${currNode.data}--->`
            currNode = currNode.next
        }

        list += "NULL"

        return list
    }

    findFromTail(n) {
        if (!this.head) {
            return "Empty List"
        }

        let slowPtr = this.head;
        let fastPtr = this.head;

        let i = 0;
        while (i < n) {
            fastPtr = fastPtr.next;
            i++
        }

        while (fastPtr.next) {
            fastPtr = fastPtr.next;
            slowPtr = slowPtr.next;
        }

        return slowPtr.data
    }

    midpoint() {
        if (!this.head) {
            return "Empty List"
        }

        let slowPtr = this.head;
        let fastPtr = this.head;

        while (fastPtr.next && fastPtr.next.next) {
            fastPtr = fastPtr.next.next;
            slowPtr = slowPtr.next
        }

        return slowPtr.data
    }

    reverse() {
        if (this.head === null) {
            return "Empty List"
        }

        let prev = null;
        let curr = this.head;
        let next = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev

        // return
    }
}

var list = new LinkedList()

list.insert(1)
list.insert(2)
list.insert(3)
// console.log(list.view())
list.insert(4)
list.insert(6)
list.insert(5)

console.log(list.view())

list.reverse();

console.log(list.view())

// console.log(list.midpoint())
// console.log(list.findFromTail(3))