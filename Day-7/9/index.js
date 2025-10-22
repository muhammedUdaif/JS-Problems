// 9. Create a button that, when clicked, creates and adds a new list item to an 
// existing list with data from user input.

const inputEl = document.querySelector(".input-data");
const buttonEl = document.querySelector(".btn");
const list = document.querySelector(".unordered-list")

buttonEl.addEventListener("click", () => {
    const valueEl = inputEl.value;

    const newItem = document.createElement("li");
    newItem.textContent = valueEl;
    list.appendChild(newItem);
    inputEl.value = " ";
})





