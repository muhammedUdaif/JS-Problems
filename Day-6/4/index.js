// 4. String Pattern Challenge

// Description:
// Write a program that prints this pattern for n = 5

// A
// B B
// C C C
// D D D D
// E E E E E

// (You must derive characters using ASCII values, not hardcoded letters.)

const n = 5;

for (let i = 1; i <= n; i++) {
  const char = String.fromCharCode(64 + i);
  let line = '';
    for (let j = 1; j <= i; j++) {
    line += char;
    if (j < i) {
      line += ' '; 
    }
  }
  
  console.log(line);
}
