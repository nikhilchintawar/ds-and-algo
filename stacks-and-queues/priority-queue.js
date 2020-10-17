//priority queue access search insert delete
//                  1      1    logn   logn


function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
  this.size = function(){
    return this.collection.length
  }
  
  this.isEmpty = function(){
    return this.size() === 0 ? true : false 
  }
  
  this.front = function(){
    return this.collection[0][0]
  }
  
  this.enqueue = function(newItem){
    if(this.isEmpty()){
     return this.collection.push(newItem)
    }else{
      this.collection = this.collection.reverse()
      let found_index = this.collection.findIndex(function(item){
        return newItem[1] >= item[1]
      })
     if(found_index === -1){
       this.collection.push(newItem)
     }else{
       this.collection.splice(found_index, 0, newItem)
     }
     this.collection = this.collection.reverse()
    }
  }
  
  this.dequeue = function(){
   if(!this.isEmpty()){
     return this.collection.shift()[0]
   }else{
     return "queue is empty."
   }
  }
    // Only change code above this line
  }