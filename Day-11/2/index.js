// 2. Write a function getTicketPrice(age) that takes a person's age (a number) and returns the price of a movie ticket based on these rules:

// 	- Children (age 12 and under): $10
// 	- Adults (age 13 to 59): $20
// 	- Seniors (age 60 and over): $15

function getTicketPrice(age) {
    if(typeof(age) !== "number") {
        return false;
    }
    if(age <= 12) {
        return `The ticket price is $10`
    }else if(age >= 13 && age <= 59) {
        return `The ticket price is $20`
    }else {
        return `The ticket price is $15`
    }
}
console.log(getTicketPrice(87));

const testGetTicketPrice = [
    {input: 60, expected: "The ticket price is $15"},
    {input: 43, expected: "The ticket price is $20"},
    {input: 23, expected: "The ticket price is $20"},
    {input: 21, expected: "The ticket price is $20"},
    {input: 34, expected: "The ticket price is $20"},
    {input: 11, expected: "The ticket price is $10"},
    {input: 7, expected: "The ticket price is $10"},
    {input: 87, expected: "The ticket price is $15"},
    {input: 54, expected: "The ticket price is $20"},
    {input: 24, expected: "The ticket price is $20"},
    {input: 56, expected: "The ticket price is $20"},
    {input: 46, expected: "The ticket price is $20"},
    {input: 36, expected: "The ticket price is $20"},
    {input: "hello", expected: false},
    {input: true, expected: false},
]

testGetTicketPrice.forEach((test, index) => {
    const actual = getTicketPrice(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})

