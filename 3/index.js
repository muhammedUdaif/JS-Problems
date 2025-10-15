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
    let result = [];
    for(let i =0; i< students.length; i++){
        const status = students[i].marks > 50 ? "Passed" : "Fail";
        result.push({name: students[i].name, status})
    }
    console.log(result);
}

studentStatus([
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
]);