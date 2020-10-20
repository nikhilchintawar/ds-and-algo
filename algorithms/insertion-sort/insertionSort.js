function insertionSort(array){
    for(let i = 1; i < array.length; i++){
        let current = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > current){
            // console.log('0',array)
            array[j+1] = array[j];
            // console.log('1',array)
            j--;
            // console.log(j)
        }
        // console.log('3',array)
        array[j+1] = current;
        // console.log(array)
    }
    // console.log('2',array)
    return array;
}

insertionSort([5,3,6,2,6])