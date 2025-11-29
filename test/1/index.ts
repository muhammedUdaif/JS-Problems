// 1. Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
// - maxTemp, minTemp, averageTemp
// - coordinates of the hottest and coldest points.

// Input: [[30,32,35],[28,40,33],[31,36,38]]
// Output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }

function AnalyzeHeatmap(heatmap: number[][] ) {
    let maxTemp = -Infinity;
    let minTemp = Infinity;
    let totalTemp = 0;
    let count = 0;
    let hottestPoint: [number, number] = [-1, -1];
    let coldestPoint: [number, number] = [-1, -1];

    for (let i = 0; i< heatmap.length; i++) {
        for( let j=0; j < heatmap[i].length; j++) {
            const temp = heatmap[i][j];
            totalTemp += temp;
            count++;

            if (temp > maxTemp) {
                maxTemp = temp;
                hottestPoint = [i, j];
            }

            if (temp < minTemp) {
                minTemp = temp;
                coldestPoint = [i, j];

            }

        } 


    }
    return { maxTemp, minTemp, averageTemp: totalTemp / count, hottestPoint, coldestPoint};
}

console.log(AnalyzeHeatmap([[9,2,32], [12,67,11], [10, 7, 1]]));

const testAnalyzeHeatMap = [
    {input: [[30,32,35],[28,40,33],[31,36,38]], expected : { maxTemp: 40, minTemp: 28, averageTemp: 33.666666666666664, hottestPoint: [1,1], coldestPoint: [1,0] }},
    {input: [[10,20,12],[28,35, 67],[88,23, 14]], expected: { maxTemp: 88, minTemp: 10, averageTemp: 33, hottestPoint: [2,0], coldestPoint: [0,0]}},
    {input: [[9,2,32], [12,67,11], [10, 7, 1]], expected: { maxTemp: 67, minTemp: 1, averageTemp: 16.77777777777778, hottestPoint: [1, 1], coldestPoint: [2,2]}}
]

testAnalyzeHeatMap.forEach((test, index) => {
    const actual = AnalyzeHeatmap(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass": "Fail";

    console.log(`Test Cases ${index + 1}: ${result}`);
})

