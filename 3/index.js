// const students = [
//   { name: "Alice", marks: 42 },
//   { name: "Bob", marks: 67 },
//   { name: "Charlie", marks: 35 },
// ];

// [
//   { name: "Alice", status: "Fail" },
//   { name: "Bob", status: "Pass" },
//   { name: "Charlie", status: "Fail" },
// ]

function studentStatus(students) {
  if(typeof(students) !== "object") {
    return false;
  }
    let result = [];
    for(let i =0; i< students.length; i++){
        const status = students[i].marks > 50 ? "Pass" : "Fail";
        result.push({name: students[i].name, status})
    }
    return result;
}

studentStatus([
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
]);

const testStudentStatus = [
  {input: [ { name: "Alice", marks: 42 }, { name: "Bob", marks: 67 }, { name: "Charlie", marks: 35 }], expected: [{ name: "Alice", status: "Fail" }, { name: "Bob", status: "Pass" }, { name: "Charlie", status: "Fail" }] },
  {input: [ { name: "Raju", marks: 32 }, { name: "Noufal", marks: 58 }, { name: "Ronaldo", marks: 100 }], expected: [{ name: "Raju", status: "Fail" }, { name: "Noufal", status: "Pass" }, { name: "Ronaldo", status: "Pass" }] },
  {input: [ { name: "Ramu", marks: 52 }, { name: "Arun", marks: 27 }, { name: "Messi", marks: 25 }], expected: [{ name: "Ramu", status: "Pass" }, { name: "Arun", status: "Fail" }, { name: "Messi", status: "Fail" }] },
  {input: [ { name: "Satheesh", marks: 12 }, { name: "Rahul", marks: 66 }, { name: "Neymer", marks: 56 }], expected: [{ name: "Satheesh", status: "Fail" }, { name: "Rahul", status: "Pass" }, { name: "Neymer", status: "Pass" }] },
  {input: [ { name: "Ramesh", marks: 2 }, { name: "Kiran", marks: 87 }, { name: "Mbappe", marks: 85 }], expected: [{ name: "Ramesh", status: "Fail" }, { name: "Kiran", status: "Pass" }, { name: "Mbappe", status: "Pass" }] },
  {input: [ { name: "Jayesh", marks: 62 }, { name: "Naveen", marks: 34 }, { name: "Ozil", marks: 65 }], expected: [{ name: "Jayesh", status: "Pass" }, { name: "Naveen", status: "Fail" }, { name: "Ozil", status: "Pass" }] },
  {input: [ { name: "Yedhu", marks: 90 }, { name: "Amith", marks: 27 }, { name: "Torres", marks: 25 }], expected: [{ name: "Yedhu", status: "Pass" }, { name: "Amith", status: "Fail" }, { name: "Torres", status: "Fail" }] },
  {input: [ { name: "Prabhath", marks: 42 }, { name: "Anas", marks: 77 }, { name: "Muller", marks: 15 }], expected: [{ name: "Prabhath", status: "Fail" }, { name: "Anas", status: "Pass" }, { name: "Muller", status: "Fail" }] },
  {input: [ { name: "Udaif", marks: 82 }, { name: 34, marks: "Ravi" }, { name: "Wirtz", marks: 95 }], expected: [{ name: "Udaif", status: "Pass" }, { name: "Ravi", status: "Fail" }, { name: "Wirtz", status: "Pass" }] },
  {input: true, expected: false },
  {input: function() {console.log("hello world")}, expected: false },
  {input: "Hello friends", expected: false },
  {input: 12345, expected:  false},
  {input: undefined, expected: false },
  {input: Symbol, expected: false },

]

testStudentStatus.forEach((test, index) => {
  const actual = studentStatus(test.input);
  const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

  console.log(`Test Case ${index + 1}: ${result}`);
})