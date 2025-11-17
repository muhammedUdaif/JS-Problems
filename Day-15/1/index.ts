// 1. Write a function MonitorLongRunningTasks(tasks, threshold, onSlowTask) that monitors
//  async tasks and invokes onSlowTask(taskIndex, elapsedTime) for any task taking longer than threshold ms.

// function MonitorLongRunningTasks(tasks: Array<promise>, threshold : number, onSlowTask: number) {
//      async function onSlowTask(taskIndex, )
// }


function MonitorLongRunningTasks<T>(tasks: Array<Promise<T>>, threshold: number, onSlowTask: (index: number, elapsed: number) => void) {
    tasks.forEach((p, index: number) => {
        const start = Date.now();
        let finished = false;

        const taskPromise = p.finally(() => {
            finished = true;
        });

        setTimeout(() => {
            if (!finished) {
                const elapsed = Date.now() - start;
                onSlowTask(index, elapsed);
            }
        }, threshold);

        return taskPromise;
    });
}


