// 6. Password Strength Checker

// Description:
// Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:

// Weak → less than 6 characters

// Medium → at least 6 chars, includes either number or special character

// Strong → at least 8 chars, includes upper, lower, number, and special character


function passwordChecker(password) {
    if(typeof(password) !== "string") {
        return false;
    }
    if(password.length < 6) {
        console.log("Your password is weak, because of the password contain atleast six charactor");
    }

    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const numberCase = /[0-9]/.test(password);
    const specialChar = /[^A-Za-z0-9]/.test(password);
     
    if(password.length >=8 && upperCase && lowerCase && numberCase && specialChar) {
        return "Strong"
    }else if(password.length >= 6 && numberCase || specialChar) {
        return "Medium"
    }else {
        return "Weak"
    }
}
passwordChecker("nihi90&");

const testPasswordChecker = [
    {input: "Udaif#123", expected: "Strong" },
    {input: "jaois", expected: "Weak" },
    {input: "12323", expected: "Weak" },
    {input: "oqyro", expected: "Weak" },
    {input: "arunloka123", expected: "Medium" },
    {input: "jofoiu5", expected: "Medium" },
    {input: "owhih989", expected: "Medium" },
    {input: "@niabui", expected: "Medium" },
    {input: "onnaku$", expected: "Medium" },
    {input: "nihi90&", expected: "Medium" },
    {input: "Joioi*423", expected: "Strong" },
    {input: "Okjfb^98u49", expected: "Strong" },
    {input: "Khyhd%399", expected: "Strong" },
    {input: "Yjhbfi#9028", expected: "Strong" },
    {input: 9298478, expected: false },
]

testPasswordChecker.forEach((test, index) => {
    const actual = passwordChecker(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
