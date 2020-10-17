function quicksort(arr){
    if(arr.length === 0) return [];

    let pivotValue = arr[0];
    let lesser = [];
    let greater = [];
    let equal = [];

    for(let val of arr){
        if(val < pivotValue){
            lesser.push(val)
        }else if(val > pivotValue){
            greater.push(val)
        }else{
            equal.push(val)
        }
    }
    return [...quicksort(lesser), ...equal, ...quicksort(greater)]
}

quicksort([5,3,6,2,6])
// worst case - O(nlogn)
//space complexity - O(logn)
//unstable algorithm