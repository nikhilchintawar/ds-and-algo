class MinHeap{
    constructor(){
        this.heap = [null];
    }

    getMin(){
        return this.heap[0]
    }

    insert(node){
        this.heap.push(node);

        if(this.heap.length > 1){
            let currentNodeIndex = this.heap.length - 1;

            while(currentNodeIndex > 1 && this.heap[Math.floor(currentNodeIndex/2)] > this.heap[currentNodeIndex]){
                [this.heap[Math.floor(currentNodeIndex/2)], this.heap[currentNodeIndex]] = [this.heap[currentNodeIndex], this.heap[Math.floor(currentNodeIndex/2)]]
            }
        }
        return this.heap;
    }

    remove(){
        let smallest = this.heap[1]

        if(this.heap.length > 2){
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.slice(this.heap.length - 1);

            if(this.heap.length === 3){
                if(this.heap[1] > this.heap[2]){
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }
        
            let current = 1;
            let leftChildIndex = 2 * i + 1;
            let rightChildIndex = 2 * i + 2;

            while(this.heap[leftChildIndex] && this.heap[rightChildIndex] &&
                    (this.heap[current] > this.heap[rightChildIndex])
                ){
                    if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                        [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                        current = leftChildIndex
                    } else {
                        [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                        current = rightChildIndex
                    }
        
                    leftChildIndex = current * 2
                    rightChildIndex = current * 2 + 1
                }
            
                }
                if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] < this.heap[current]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                }
                
                /* If there are only two elements in the array, we directly splice out the first element */
                
                else if (this.heap.length === 2) {
                    this.heap.splice(1, 1)
                } else {
                    return null
                }
            
                return smallest
        }
    }
    
