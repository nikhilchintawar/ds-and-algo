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

const pQueue = new PriorityQueue();
pQueue.enqueue(1, 3);
pQueue.enqueue(3, 2);
pQueue.enqueue(3, 1)
pQueue.dequeue();
