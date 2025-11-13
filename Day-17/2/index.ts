
// 2.Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
// - maxTemp, minTemp, averageTemp
// - coordinates of the hottest and coldest points.
// Example:
// Input: [[30,32,35],[28,40,33],[31,36,38]]
// Output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }

function AnalyzeHeatmap(heatmap: number[][]) {
    let flatheatmap = heatmap.flat();
    let sortflatheatmap = flatheatmap.sort((a,b) => b -a);
    let maxTemp = sortflatheatmap[0];
    let minTemp = sortflatheatmap[sortflatheatmap.length -1];
    let sum = 0;
    for(let i=0; i< sortflatheatmap.length; i++) {
        sum += sortflatheatmap[i];
    }
    let averageTemp = sum / sortflatheatmap.length;
    let hottestPoint = [];
    for(let i=0; i< heatmap.length; i++) {
        for(let j=0; j< heatmap[i].length; j++) {
            if(heatmap[i][j] === maxTemp) {
                hottestPoint.push(i,j);
            }

            if(hottestPoint.length > 2) {
                hottestPoint.pop();
            } else {
                hottestPoint;
            }
        }
    }

    let coldestPoint = [];
    for(let i=0; i < heatmap.length; i++) {
        for(let j =0; j< heatmap[i].length; j++) {
            if(heatmap[i][j] === minTemp) {
                coldestPoint.push(i,j);
            }

            if(coldestPoint.length >  2) {
                coldestPoint.pop();
            } else {
                coldestPoint;
            }
        }
    }
    return {maxTemp: maxTemp, minTemp: minTemp, averageTemp: averageTemp, hottestPoint: hottestPoint, coldestPoint: coldestPoint};
}

console.log(AnalyzeHeatmap([[59,59,35],[59,40,9],[31,33,39]]));

const testAnalyzeHeatmap = [
    {input: [[30,32,35],[28,40,33],[31,36,38]], expected: { maxTemp: 40, minTemp: 28, averageTemp: 33.666666666666664, hottestPoint: [1,1], coldestPoint: [1,0] }},
    {input: [[80,100,45],[0, -1, 34],[500, 400, -200]], expected: { maxTemp: 500, minTemp: -200, averageTemp: 106.44444444444444, hottestPoint: [2,0], coldestPoint: [2,2] }},
    {input: [[59,32,35],[59,40,33],[31,9,39]], expected: { maxTemp: 59, minTemp: 9, averageTemp: 37.44444444444444, hottestPoint: [0,0], coldestPoint: [2,1] }},
    {input: [[59,59,35],[59,40,9],[31,33,39]], expected: { maxTemp: 59, minTemp: 9, averageTemp: 40.44444444444444, hottestPoint: [0,0], coldestPoint: [1, 2] }},
]

testAnalyzeHeatmap.forEach((test, index) => {
    const actual = AnalyzeHeatmap(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`)
})