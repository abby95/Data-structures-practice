class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data))
    }
}

function LevelWidth(root) {
    let counter = [0];
    let arr = [root];
    arr.push('s')
    while (arr.length > 1) {
        let node = arr.shift();

        if (node === 's') {
            // arr.shift();
            arr.push('s');
            counter.push(0)
        } else {
            arr.push(...node.children);
            counter[counter.length - 1]++

        }
    }

    console.log(counter)
}

var A = new Node(20);
A.add(30);
A.add(40);
A.add(50);

console.log(JSON.stringify(A, null, 2))
LevelWidth(A)
