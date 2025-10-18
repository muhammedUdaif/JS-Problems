// 5. Create a UI with a name input box, and we should be able to see the entered name below with adding the prefix as "Hello".
//  But we should not be able to see the printed name each time when a user enters a character in the input,
//   instead it should be shown when the user stops typing.

const inputEl = document.querySelector(".input-section")
const nameEl = document.querySelector(".section-named")
const buttonEl = document.querySelector(".btn")

buttonEl.addEventListener("click", () => {
    const inputValue = inputEl.value;
    console.log(inputValue)

    nameEl.textContent = `Hello ${inputValue}`
});




