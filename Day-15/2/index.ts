// Write a function ParallelLimit(tasks, limit) where tasks is an array of functions that return Promises. 
// Run only limit promises concurrently until all are resolved.
// Example:
// const tasks = [
//  () => fetch('/api/1'),
//  () => fetch('/api/2'),
//  () => fetch('/api/3')
// ];
// await ParallelLimit(tasks, 2);

const tasks = [
 () => fetch('/api/1'),
 () => fetch('/api/2'),
 () => fetch('/api/3')
];

function ParallelLimit<T>(tasks: Array < () => Promise<T>>, limit: number) {
    if(!Array.isArray(tasks)){
        return Promise.reject( new TypeError("tasks must be an array"))
    }
    let start = 0;
    return new Promise((resolve, reject) =>{
        while(start < limit) {
            Promise.resolve().then(() => tasks[start])
        }
    })
}

console.log(ParallelLimit(tasks, 2));
