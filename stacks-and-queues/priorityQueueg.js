class QueueElement{
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.items = []
    }

    enqueue(element, priority){
        let qElement = new QueueElement(element, priority);
        let contain = false;

        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].priority > qElement.priority){
                this.items.splice(i, 0, qElement);
                contain = true
            }
        }
        if(!contain){
            this.items.push(qElement);
        }
    }

    isEmpty = () => this.items.length === 0;

    dequeue(){
        if(this.isEmpty()) return "no items";
        return this.items.shift()
    }

    printPQueue() 
{ 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i].element + " "; 
    return str; 
} 
}

// const pQueue = new PriorityQueue();
// pQueue.enqueue(1, 3);
// pQueue.enqueue(3, 2);
// pQueue.enqueue(3, 1)
// pQueue.dequeue();

// console.log(pQueue.printPQueue())

