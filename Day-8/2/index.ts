// 2. Write a function greet that takes a required name and an optional greeting (default is "Hello").

// Test case:
// greet("Alice");        // Hello, Alice
// greet("Bob", "Hi");    // Hi, Bob


function greet(name: string, greeting?: string): string {
   if(greeting) {
     return `${greeting}, ${name}`
   }else {
    return `Hello, ${name}`
   }
}
console.log(greet("udaif"));
