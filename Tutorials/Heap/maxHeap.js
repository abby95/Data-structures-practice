

class Heap {
    constructor() {
        this.heap = [null]
    }

    insert(data) {
        this.heap.push(data);

        if (this.heap.length > 2) { // I keep forgetting this
            let index = this.heap.length - 1;

            while (this.heap[index] > this.heap[Math.floor(index / 2)]) {
                if (index >= 1) {
                    [this.heap[index], this.heap[Math.floor(index / 2)]] = [this.heap[Math.floor(index / 2)], this.heap[index]];

                    if (Math.floor(index / 2) > 1) {
                        index = Math.floor(index / 2)

                    }
                } else {
                    break;
                }
            }
        }
        // return(this.heap)
    }
}

var heap = new Heap()

heap.insert(20);
heap.insert(13);
heap.insert(15);
heap.insert(19);
heap.insert(17);


console.log(heap.heap)