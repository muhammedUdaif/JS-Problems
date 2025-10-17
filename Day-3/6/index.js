// 6. Write a function to implement a Queue. With below operations:
// Enqueue: Adds a new element to the rear (end) of the queue.
// Dequeue: Removes and returns the element from the front of the queue.
// Peek: Returns the value of the element at the front of the queue without removing it.
// isEmpty: Checks if the queue contains no elements.

// Test cases:

// const myQueue = getQueue();
// myQueue.enQueue('1');
// myQueue.enQueue('2');
// myQueue.deQueue(); // 1
// myQueue.peek(); // 2
// myQueue.isEmpty(); // false

function getQueue() {
  const items = [];

  return {
    enqueue(value) {
      items.push(value);
    },

    dequeue() {
      if (items.length === 0) return null;
      return items.shift();
    },

    peek() {
      if (items.length === 0) return null;
      return items[0];
    },

    isEmpty() {
      return items.length === 0;
    }
  };
}

const myQueue = getQueue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.peek()); 
console.log(myQueue.dequeue());  
console.log(myQueue.peek());     
console.log(myQueue.isEmpty());  

myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());
