// 3. Write a function SortByScoreRank(data) that takes an 
// array of player scores and assigns ranks (ties get same rank).
// Example:
// Input: [100,100,90,80]
// Output: [{score:100,rank:1},{score:100,rank:1},{score:90,rank:2},{score:80,rank:3}]

function SortByScoreRank(arr: number[]) {
    let sorted = arr.sort((a,b) => b -a);

    let result: {score: number, rank: number}[] = [];
    let rank = 1;

    for(let i=0; i< sorted.length; i++) {
        if(i > 0 && sorted[i] !== sorted[i -1]) {
            rank ++;
        }
        result.push({score: sorted[i], rank: rank});
    }
    return result;
}

console.log(SortByScoreRank([100,100,90,80]));

// test Case 

const TestSortByScoreRank = [
    {input: [100,100,90,80], expected: [{score:100,rank:1},{score:100,rank:1},{score:90,rank:2},{score:80,rank:3}]},
    {input: [100,100,100,100], expected: [{score:100,rank:1},{score:100,rank:1},{score:100,rank:1},{score:100,rank:1}]},
    {input: [100,30,90,70], expected: [{score:100,rank:1},{score:90,rank:2},{score:70,rank:3},{score:30,rank:4}]},
    {input: [1,0,-10,-11], expected: [{score:1,rank:1},{score:0,rank:2},{score:-10,rank:3},{score:-11,rank:4}]},
    {input: [20,-20,10,-10], expected: [{score:20,rank:1},{score:10,rank:2},{score:-10,rank:3},{score:-20,rank:4}]},
    {input: [1,2,3,4], expected: [{score: 4,rank:1},{score:3,rank:2},{score:2,rank:3},{score:1,rank:4}]},
]

TestSortByScoreRank.forEach((test, index) => {
    const actual = SortByScoreRank(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
