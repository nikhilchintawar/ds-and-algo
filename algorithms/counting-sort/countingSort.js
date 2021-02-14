function countingSort(array, minimumValue, maximumValue) {
    let i;
    let z = 0;
    let count = [];
  
    // Count the instances of each element.
    for (i = minimumValue; i <= maximumValue; i++) {
      count[i] = 0;
    }
  
    // We now have a placeholder array that we'll use to keep
    // track of which element will be sorted into each index.
    console.log(count);
  
    // Build up our index count array.
    for (i=0; i < array.length; i++) {
      count[array[i]]++;
    }
  
    console.log(count);
  
    // Modify array and move elements into their sorted location.
    for (i = minimumValue; i <= maximumValue; i++) {
      while (count[i]-- > 0) {
        console.log('item at index ' + z + ' is: ', array[z]);
  
        array[z++] = i;
  
        console.log('moving item ' + i + ' to correct location');
      }
    }
   
    console.log("Hooray! Array is now sorted!");
  
    return array;
  }

let array = [9,4,1,7,9,1,2,0]
countingSort(array, 0, 9)

console.log(arguments)