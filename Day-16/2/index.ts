// 2. Write a function FindAvailableSeats(seatGrid, groupSize) that finds all horizontally consecutive 
// seat blocks of size groupSize available (0 = empty, 1 = booked). Return each block's starting coordinate.

function FindAvailableSeats(matrix: number[][], groupSize : number) {
    const result = [];
    
    for(let i=0; i< matrix.length; i++) {
        let count = 0;
        for(let j=0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0 ) {
                count ++;
                if(count === groupSize) {
                    result.push(i, j- groupSize + 1);
                    count --;
                }
            } else {
                 count = 0;
            }
        }
    }
    return result;
}

console.log(FindAvailableSeats([[1,1,1], [1,1,1], [0,0,1]], 2));

const testFindAvailableSeats = [
    {input: [[1,1,1], [1,1,1], [0,0,1]], input1: 2, expected: [2,0]}
]

testFindAvailableSeats.forEach((test, index) => {
    const actual = FindAvailableSeats(test.input, 2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);

})
