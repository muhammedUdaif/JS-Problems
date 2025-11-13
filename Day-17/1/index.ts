// 1.Write a function TeamSelection(players, teamSize) that lists all unique possible team combinations from a list of players.
//  Each team should be represented as an array of names.

function TeamSelection(players: string[], teamSize: number ) {
    let result: string[][] = [];
       let team: string[] = [];
    function selection(start: number ) {
            if(team.length === teamSize) {
                result.push([...team]);
                  return;
            }

            for(let i= start; i< players.length; i++) {
                team.push(players[i]);
                selection(i + 1);
                team.pop();
             }
             return result
        }
        return selection(0);
    }
console.log(TeamSelection(["a","b","c","d"], 1));

const testTeamSelection = [
    {input: ["a","b","c"], input2: 2, expected: [["a","b"],["a","c"],["b","c"]]},
    {input: ["a","b","c","d"], input2: 2, expected: [["a","b"],["a","c"],["a","d"],["b","c"],["b","d"],["c","d"]]},
    {input: ["a","b","c","d"], input2: 3, expected: [["a","b","c"],["a","b","d"],["a","c","d"],["b","c","d"]]},
    {input: ["a","b","c","d"], input2: 4, expected: [["a","b","c","d"]]},
    {input: ["a","b","c","d"], input2: 1, expected: [["a"],["b"],["c"],["d"]]},
]

testTeamSelection.forEach((test, index) => {
    const actual = TeamSelection(test.input, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1} : ${result}`);
})