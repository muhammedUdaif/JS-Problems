// 4. String Pattern Challenge

// Description:
// Write a program that prints this pattern for n = 5

// A
// B B
// C C C
// D D D D
// E E E E E

// (You must derive characters using ASCII values, not hardcoded letters.)

function printPattern(n) {
  if(typeof(n) !== "number") {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    const char = String.fromCharCode(64 + i);
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += char;
      if (j < i) line += ' ';
    }
    console.log(line);
  }
}

const testCases = [ 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 26, 0, -3 ];

for (const n of testCases) {
  if (n <= 0) {
    console.log(`Pattern for n = ${n}: Invalid input must be > 0`);
  } else if (n > 26) {
    console.log(`Pattern for n = ${n}: Too large max 26 allowed`);
  } else {
    printPattern(n);
  }
}
