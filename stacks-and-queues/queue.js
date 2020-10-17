class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    dequeue(){
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return this;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.peek();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();
  

// queue using stacks
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = []
    this.queue = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.queue.length > 0){
        this.stack.push(this.queue.pop())
    }
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack.length > 0){
        this.queue.push(this.stack.pop())
    }
    return this.queue.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stack.length > 0){
        return this.stack[0]
    }
    return this.queue[this.queue.length-1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
       return(
    this.stack.length === 0  && this.queue.length === 0 ? true : false
        )
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
  