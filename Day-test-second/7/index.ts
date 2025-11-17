// Write a function romanToInteger(roman) that:
// Converts a Roman numeral string into its corresponding integer value.
// The function should correctly handle subtractive notation (e.g., IV = 4, IX = 9).
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
// Example:
// Input:
// roman = "MCMXCIV"
// Output:
// integer: 1994

function romanToInteger(roman: string) {
    const romans: Record<string, number> = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    let total = 0;

    for(let i=0; i< roman.length; i++) {
        let current = romans[roman[i]];
        let next = romans[roman[i + 1]];

        if(next && current < next) {
            total += next - current;
            i++;
        } else {
            total += current;
        }
    }
    return total;
}

console.log(romanToInteger("MCMXCIV"));