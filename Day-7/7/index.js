// 7. Create a container with random text and should be scrollable. Show a progress bar below, that fills as the user scrolls down the page. 

const containerEl = document.querySelector(".sub-container");
const progressEl = document.querySelector(".progress");

containerEl.addEventListener("scroll", () => {
    progressEl.textContent = `Progress : ${containerEl.scrollTop}`;
})

