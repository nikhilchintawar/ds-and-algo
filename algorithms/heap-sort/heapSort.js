//bigO O(nlogn)
function maxHeapify(array, heapSize, i){
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if(left < heapSize && array[left] > array[max]){
        max = left;
    }

    if(right < heapSize && array[right] > array[max]){
        max = right;
    }

    if(max!==i){
        [array[i], array[max]] = [array[max], array[i]];
        maxHeapify(array, heapSize, max);
    }
}

function buildHeap(array){
    for(let i = Math.floor(array.length/2); i>=0; i--){
        maxHeapify(array, array.length, i);
    }
}


function heapSort(array){
   let heapSize = array.length;
   buildHeap(array);
   for(let i = array.length-1; i > 0; i--){
        [array[0], array[i]] = [array[i], array[0]];
        heapSize--;
        maxHeapify(array, heapSize, 0);
   }
}

array = [2,8,1,4,14,7,16,10,9,3];

heapSort(array);
console.log(array);