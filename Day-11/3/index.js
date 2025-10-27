// 3. Create a person Object, which contains below said properties:
// 	- A firstName property (e.g., "John")
// 	- A lastName property (e.g., "Doe").
// 	- A birthYear property (e.g., 1990).
// 	- A method called getFullName() that returns the person's full name (e.g., "John Doe")
// 	- A method called getAge() that calculates and returns the person's current age.

let person = {
    firstName : "John",
    lastName: "Doe",
    birthYear: 1990,
    getFullName: function(){
        console.log(`full name : ${this.firstName} ${this.lastName}`)
    },
    getAge: function() {
        let date = new Date();
        let currentYear =  date.getFullYear();
        console.log(`The age become :${currentYear - this.birthYear }`);
    }
}
person.getFullName();
person.getAge();