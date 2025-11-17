// 3. Write a function TimeoutWrapper(fn, ms) that wraps any async function fn and rejects if it takes longer than ms.

function TimeoutWrapper<T>(fn: () => Promise<T>, ms: number) {
    return function (...args: any[]): Promise<T> {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(new Error("Function timed out"));
            }, ms);

            fn(...args)
                .then(result => {
                    clearTimeout(timer);
                    resolve(result);
                })
                .catch(err => {
                    clearTimeout(timer);
                    reject(err);
            });
        });
    };
}

async function slowFunction() {
    return new Promise(resolve => setTimeout(() => resolve("done"), 2000));
}

const wrapped = TimeoutWrapper(slowFunction, 1000);

wrapped().then(console.log)
.catch(console.error);