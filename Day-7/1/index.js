
// 1. Create a box which shows a random background colour when user hovers over it. The colour should be cleared when mouse is taken out of the box.

const boxModel = document.querySelector(".sub-container")

boxModel.addEventListener("mouseover", () => {
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
    for(let i=0; i< 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    boxModel.style.backgroundColor = color;
})

boxModel.addEventListener("mouseout", () => {
    boxModel.style.backgroundColor = "";
})
