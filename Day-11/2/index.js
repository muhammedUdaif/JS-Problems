// 2. Write a function getTicketPrice(age) that takes a person's age (a number) and returns the price of a movie ticket based on these rules:

// 	- Children (age 12 and under): $10
// 	- Adults (age 13 to 59): $20
// 	- Seniors (age 60 and over): $15

function getTicketPrice(age) {
    if(age <= 12) {
        console.log("The ticket price is $10 only")
    }else if(age >= 13 && age <= 59) {
        console.log("The ticket price is $20");
    }else {
        console.log("The ticket Price is $15")
    }
}
getTicketPrice(60);