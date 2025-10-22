// 2. Create a UI which shows some text which is entered by a user using text-area, and a toggle button which controls the visibility of the text shown.

const textEl = document.querySelector(".text-section");
const buttonEl = document.querySelector(".show-btn");
const paraEl = document.querySelector(".para");

buttonEl.addEventListener("click", () => {
    if(paraEl.style.display === "none") {
        paraEl.style.display = "block";
        paraEl.textContent = textEl.value;
        buttonEl.textContent = "Hide Text";
    }else  {
        paraEl.style.display = "none";
        buttonEl.textContent = "Show Text";
    }
})