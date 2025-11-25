// 4.  Convert Snake Case to Camel Case
// input: "hello_world_from_js"
// output: "helloWorldFromJs"


function conversionToCamel(str: string) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(conversionToCamel("hello_world_from_js"));

// test Cases

const testConversionToCamel = [
    {input: "hello_world_from_js", expected: "helloWorldFromJs"},
    {input: "Next_js_projects_to_upskill", expected: "NextJsProjectsToUpskill"}
]

testConversionToCamel.forEach((test, index) => {
    const actual = conversionToCamel(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
