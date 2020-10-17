class LinkedListNode{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 1;
    }
    prepend = element => {
        const node = new LinkedListNode(element)
        if(!this.head){
            this.head = node
            return this;
        }
        let current = this.head;
        this.head = node;
        node.next = current;
        this.length++;
        return this;
    }

    append = (element) => {
        const node = new LinkedListNode(element)

        if(!this.head){
            this.head = node;
            return this;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        } 
        console.log(current)
        current.next = node
        console.log(current.next)
        this.length++;
        return this;
    }
}

let a = new LinkedList()
a.prepend(5)
a.prepend(8)
a.prepend(3)
a.append(1)
a.append(2)
a.prepend(6)
console.log(a.head);
console.log(a.length)
