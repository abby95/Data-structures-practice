class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {  //Checking if the data to be inserted is less than the current node (Always starts with Root Node==> You will call this function as < Root.insert(data)> )
            this.left.insert(data) // if left node exists.. we will now call insert on that node
        } else if (data < this.data && !this.left) {
            this.left = new Node(data)
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data && !this.right) {
            this.right = new Node(data)
        }
    }

    contains(data) {
        if (this.data == data) {
            return this
        } else if (data < this.data && this.left) {
            // console.log("inside data<this.data");
            if (this.left.data == data) {
                // console.log("this.left.data == data");

                console.log(this.left);
                return (this.left)
            } else {
                // console.log("Calling Contains on left child")
                this.left.contains(data)
            }
            return
        }

        if (data > this.data && this.right) {
            if (this.right.data == data) {
                console.log(this.right);
                return (this.right)
            } else {
                this.right.contains(data)
            }
            return

        }
        console.log(`Cannot Find ${data} in the tree`)
        return null
    }
}

var A = new Node(20);

A.insert(22);
A.insert(21);
A.insert(30);
A.insert(27)
A.insert(2);
// A.contains(2)
// A.contains(-20)
// A.contains(39);
// A.contains(30)
console.log(A.contains(20))
// console.log(JSON.stringify(A, null, 2));