class minHeap {
    constructor() {
        this.heap = [null];
    }

    add(num) {
        this.heap.push(num)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1;
            let parent = Math.floor(index / 2);

            while (this.heap[index] < this.heap[parent]) {

                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
                if (parent > 1) { //IMPORTANT CONDITON
                    index = parent;
                    parent = Math.floor(index / 2);
                }
                // else {
                //     break
                // }
            }
        }
    }

    display() {
        console.log(this.heap)
    }
}

const heap = new minHeap()

heap.add(4)
heap.add(6)
heap.add(8);
heap.add(10);
heap.add(5);
heap.add(16);
heap.add(3);
// heap.add(11);
// heap.add(9);
// heap.add(10);

heap.display()