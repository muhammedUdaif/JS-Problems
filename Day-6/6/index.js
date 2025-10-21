// 6. Password Strength Checker

// Description:
// Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:

// Weak → less than 6 characters

// Medium → at least 6 chars, includes either number or special character

// Strong → at least 8 chars, includes upper, lower, number, and special character


function passwordChecker(password) {
    if(password.length < 6) {
        console.log("Your password is weak, because of the password contain atleast six charactor");
    }

    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const numberCase = /[0-9]/.test(password);
    const specialChar = /[^A-Za-z0-9]/.test(password);
     
    if(password.length >=8 && upperCase && lowerCase && numberCase && specialChar) {
        console.log("Your password is much stroger");
    }else if(password.length >= 6 && numberCase || specialChar) {
        console.log("Your password is meadium range")
    }else {
        console.log("Your password is weak, Need to improve your password");
    }
}
passwordChecker("Udaif@123");
