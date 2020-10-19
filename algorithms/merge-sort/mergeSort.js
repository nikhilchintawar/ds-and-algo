//O(n) = O(nlogn)

const mergeSort = (array) => {
    if(array.length === 1){
        return array;
    }else{
        const splitIndex = Math.floor(array.length/2);
        // console.log("1",splitIndex)
        return merge(
            mergeSort(array.slice(0, splitIndex)),
            mergeSort(array.slice(splitIndex))
        )
    }
}

const merge = (arr1, arr2) => {
    let merged = [];
    // console.log(arr1, arr2)
    while(arr1.length && arr2.length){
        if(arr1[0] > arr2[0]){
            merged.push(arr2.shift());
        }else if(arr1[0] < arr2[0]){
            merged.push(arr1.shift());
        }else{
            merged.push(arr1.shift(), arr2.shift());
        }
        // console.log(merged)
    }
    return [...merged, ...arr1, ...arr2];
}

mergeSort([5,3,6,2,6]);