class Node{
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element){
        let node = new Node(element, this.tail);
        let currentNode = this.head;

        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            node.prev = currentNode;
            currentNode.next = node;
            this.tail = node;
        }
    }
    
    reverse(){
        let tmp = null;
        let currentNode = this.head;

        if(this.head === null){
            return null;
        }

        this.tail = currentNode;

        
        console.log('3',currentNode.prev)
        console.log('3',currentNode.next)
        while (currentNode) {
            tmp = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = tmp;
            currentNode = currentNode.prev;
        }
        
        // 4, 6, 2
        // tmp = 4
        // null = 6
        // 6 - null
        // 6
        // 6, 4, 2

        console.log(tmp)
        if(tmp !== null) {
            console.log('1',tmp.prev)
            this.head = tmp.prev;         
        }
    }
}


let db = new DoublyLinkedList()
db.append(4)
db.append(6)
db.append(2)
db.reverse()