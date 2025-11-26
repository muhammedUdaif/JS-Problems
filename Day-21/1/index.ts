// 1. Write a function that converts Celsius temperature to Fahrenheit.

function CelsiustoFahrenheit(Celsius: number) {
    let Fahrenheit = (Celsius * 9/5) + 32;
    return Fahrenheit;
}

console.log(CelsiustoFahrenheit(25));


// test cases

const testCeliustoFahrenheit = [
    {input: 0, expected: 32},
    {input: 100, expected: 212},
    {input: -40, expected: -40},
    {input: 37, expected: 98.6}
]

testCeliustoFahrenheit.forEach((test, index) => {
    const actual = CelsiustoFahrenheit(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})