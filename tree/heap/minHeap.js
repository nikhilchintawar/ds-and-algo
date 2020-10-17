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

    
}