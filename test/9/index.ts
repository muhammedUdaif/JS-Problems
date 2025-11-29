// 9. Write a program to compute the difference between two objects.

// Input: 
// const a = { x:1, y:2, z:3 };
// const b = { x:1, y:4, w:5 };

// Output: 
// {
//   changed: { y: [2,4] },
//   added: { w: 5 },
//   removed: ["z"]
// }

function objectDifference(obj1: {[key: string]: any}, obj2: {[key: string]: any}) {
    const result = {
        changed: {} ,
        added: {} ,
        removed: [] 
    };

    for (const key in obj1) {
        if (key in obj2) {
            if (obj1[key] !== obj2[key]) {
                result.changed[key] = [obj1[key], obj2[key]];
            }
        } else {
            result.removed.push(key);
        }
    }

    for (const key in obj2) {
        if (!(key in obj1)) {
            result.added[key] = obj2[key];
        }
    }

    return result;
}

const a = { x:1, y:2, z:3 };
const b = { x:1, y:4, w:5 };

console.log(objectDifference(a, b));