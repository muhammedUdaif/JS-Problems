// Flatten Object Keys
// Input: {a:{b:{c:1}}, d:2}
// Output: {"a.b.c":1, "d":2}

function flatten(obj: any): any {
    const output: any = {};

    function flattenNested(current: any, prefix: string = '') {
        if (typeof current !== 'object' ) {
            return;
        }

        for (const key in current) {
            if (current[key]) {
                const value = current[key];
                const newKey = prefix ? `${prefix}.${key}` : key;

                if (typeof value === 'object') {
                    flattenNested(value, newKey);
                } else {
                    output[newKey] = value;
                }
            }
        }
    }

    flattenNested(obj);
    return output;
}

const testFlatten = [
    {input:{ a: { b: { c: 1 } }, d: 2 }, expected: { "a.b.c": 1, "d": 2 }},
    {input:{x: {y: {z: 5}}, p: 10, q: { r: 20}}, expected: {"x.y.z": 5, p: 10, "q.r": 20}},
    {input:{a: 1}, expected: {a: 1}}
]

testFlatten.forEach((test, index) => {
    const actual = flatten(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
