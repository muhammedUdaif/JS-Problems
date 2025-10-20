// [ ] Write a function  updateUser(user)  that adds a  lastActive  property — mutate it in one
// version, then avoid mutation in another.

// 1
// let num1 = 10;
// let num2 = num1;

// num1=20;

// let obj1 = {
//     name: "muhammed",
//     age: 23
// }

// let obj2 = obj1;

// obj1.name = "udaif";

// console.log(obj2);
// console.log(num2);

// let obj = {
//     name: "muhammed",
//     age: 23,
//     profile: {
//         position: "developer",
//         id: 1
//     }
// }

// let spreadObj = {...obj}

// obj.profile.position = "debugger"

// let assignObj = Object.assign(obj)
// obj.profile.position = "Back end developer"

// console.log(assignObj)
// console.log(spreadObj)

// let input = { 
//     user: { 
//         name: 'John',
//         age: 25 
//     } 
// }

// let result = JSON.parse(JSON.stringify(input))
 
//  if(input === result ) {
//     console.log("The result is true")
//  }else {
//     console.log("The result is false")
//  }

// function addItem(arr, item) {
//     let result= [];
//   for(let i=0; i< arr.length; i++) {
//      result[i] = arr[i]
//      result.push(item)
//   }
//    return result
// }

// console.log(addItem([1,2,3,4],4))
