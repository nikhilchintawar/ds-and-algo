// add a method remove() to the linked list that deletes a node to the specified index.
class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }

    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      console.log(this.printList())
      return this;
    }

    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
    }

    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      console.log(this.printList());
      return this.printList();
    }

    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }

    removeElement(value){
        if(!this.head) return null;

        let prevNode = this.head;

        while(prevNode){
            let currentNode = prevNode.next;
            if(currentNode){
                if(currentNode.value === value){
                    prevNode.next = currentNode.next;
                    this.length--
                }
            }
            prevNode = currentNode
            return console.log('1',this.printList())
        }

        // if(node.value !== value && node.next === null) return console.log("value not found.");

        // console.log('1',this.printList());
        // console.log(node)
        // let nextNode = node.next;
        // prevNode.next = nextNode;
        // console.log('2',this.printList());
        // this.length--
        // return 
    }

    isEmpty(){
        return this.length === 0 ? true : false;
    }

    indexOf(value){
        if(this.head === null) return -1;

        let node = this.head;
        let index = 0;
        
        while(node.value !== value && node.next !== null){
            node = node.next;
            index++;
        }

        if(node.value !== value && node.next === null) return console.log("value not found.");

        console.log(index++)
        return index++;
    }

    reverse(){
      if(!this.head){
        return null
      }

      let currentNode = this.head;
      this.tail = this.head;
      let nextNode = currentNode.next;
      
      while(nextNode){
        let tmp = nextNode.next;
        nextNode.next = currentNode;
        currentNode = nextNode;
        nextNode = tmp;
      }
      // 4, 1, 99, 5, 16, 88
      // currentNode = 5
      // // this.tail = 4
      // nextNode = 16
      // tmp = 88
      // 88 = 5
      // 5 = 16
      // nextNode = 88
      // 1, 99, 4, 5, 16, 88
      // 99, 5, 1, 4, 16, 88
      // 5, 16, 99,1, 4,  88
      // 16, 88, 5, 99, 1, 4
      // 88, 16, 5, 99, 1, 4

      this.head.next = null;
      this.head = currentNode;
      console.log('2',this.printList())
      return this.printList()
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  myLinkedList.prepend(4);
  myLinkedList.remove(2);
  myLinkedList.indexOf(88);
  myLinkedList.isEmpty();
  myLinkedList.removeElement(88)
  myLinkedList.reverse()