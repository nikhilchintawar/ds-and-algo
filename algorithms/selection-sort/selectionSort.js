function selectionSort(array){
    for(let i = 0; i < array.length - 1; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[min] > array[j]) min = j;
        }
        [array[i], array[min]] = [array[min], array[i]]
    }
    console.log(array);
    return array;
}

selectionSort([5,3,6,2,6])