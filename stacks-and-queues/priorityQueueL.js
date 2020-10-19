class QueueElement{
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue{
    constructor(){
        this.head = null;
    }

    enqueue(element, priority){
        const qElement = new QueueElement(element, priority);
        
        if(!this.head){
           return this.head = qElement;
        }

        let currentNode = this.head;
        let prevNode = currentNode;
        // console.log(currentNode)

        while(currentNode.priority > qElement.priority && currentNode.next !== null){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = qElement;
        qElement.next = currentNode;

        return this;
    }

    dequeue(){
        if(!this.head) return "queue is empty";

        this.head = this.head.next;
        return this;
    }
}

// const pQueue = new PriorityQueue();
// pQueue.enqueue(1, 3);
// pQueue.enqueue(3, 2);
// pQueue.enqueue(3, 1)
// pQueue.dequeue();


// optimized solution using heap

class PriorityQueueHeaps{
    constructor(){
        this.heap = [null];
    }

    enqueue(value, priority){
        const newNode = new QueueElement(value, priority);
        this.heap.push(newNode);

        let currentNodeIndex = this.heap.length - 1;

        let currentNodeParentIndex = Math.floor(currentNodeIndex/2);
        while(this.heap[currentNodeParentIndex] && newNode.priority > this.heap[currentNodeParentIndex].priority){
            const parentNode = this.heap[currentNodeParentIndex];
            this.heap[currentNodeParentIndex] = newNode;
            this.heap[currentNodeIndex] = parentNode;
            currentNodeIndex = currentNodeParentIndex;
            currentNodeParentIndex = Math.floor(currentNodeIndex/2);
        }
        console.log(this.heap)
    }

    dequeue(){
        if(this.heap.length < 3){
            const toReturn = this.heap.pop();
            this.heap[0] = null;
        console.log(this.heap)

            return toReturn;
        }

        const toRemove = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIndex = 1;
        let [left, right] = [2*currentIndex, 2*currentIndex+1];
        let currentChildIndex = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;
        while(this.heap[currentChildIndex] && this.heap[currentIndex].priority <= this.heap[currentChildIndex].priority){
            let currentNode = this.heap[currentIndex];
            let currentChildNode = this.heap[currentChildIndex];
            this.heap[currentChildIndex] = currentNode;
            this.heap[currentIndex] = currentChildNode;
        }
        console.log(this.heap)

        return toRemove;
    }
}

const pQueue1 = new PriorityQueueHeaps();
pQueue1.enqueue(1, 3);
pQueue1.enqueue(3, 2);
pQueue1.enqueue(3, 1)
pQueue1.dequeue();