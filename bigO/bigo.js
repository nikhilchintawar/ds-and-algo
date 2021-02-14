//const { performance } = require('perf_hooks')

const nemo = ['nemo']
const large = new Array(1000).fill('nemo')

function findNemo(array){
    // let t0 = performance.now();
    for (let i=0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('found');
            
        }
    }
    // let t1 = performance.now()
    // console.log(`call to find nemo took ${t1-t0} milliseconds`);
    
}

findNemo(large)//O(n) --> linear time