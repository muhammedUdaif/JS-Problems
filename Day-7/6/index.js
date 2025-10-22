// 6. Develop a UI which shows the window width and height when resizing. 

const headEl = document.querySelector(".sub-heading-section");

window.addEventListener("resize", () => {
    headEl.textContent = `The window height is ${window.innerHeight}px and the window width is ${window.innerWidth}px`
})
