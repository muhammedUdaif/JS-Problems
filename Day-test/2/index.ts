// Write a function groupAnagrams(words) that groups a list of words by their anagram
// type.
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

function groupAnagrams(words: string[]): string[][] {
    const map = new Map();

    for (const word of words) {
        const key = word.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        } 
        map.get(key).push(word);
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

const testGroupAnagrams = [
    {input: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [["eat","tea","ate"], ["tan","nat"], ["bat"]]},
    {input: ["arun", "udaif", "rahul", "runa", "faidu", "noufal"], expected: [["arun", "runa"], ["udaif", "faidu"], ["rahul"], ["noufal"]]}
]

testGroupAnagrams.forEach((test, index) => {
    const actual = groupAnagrams(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})

