// 5. Add additional changes to 3rd question mentioned above by updating the border-colour only once. If the border colour is updated once, further double-click should not update the border colour.

const boxModel = document.querySelector(".sub-container");
let count = 0;

boxModel.addEventListener("dblclick", handleDoubleClick)

function handleDoubleClick() {
    let  letters = "0123456789ABCDEF";
    let  color = "#";
    for(let i=0; i< 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    boxModel.style.borderColor = color;
    count++;
    if(count >= 1) {
        boxModel.removeEventListener("dblclick", handleDoubleClick)
    }
}