// 3. Create a box which changes it's border colour randomly when user makes a double-click inside the box.

const boxModel = document.querySelector(".sub-container");

boxModel.addEventListener("dblclick", () => {
    let count = 0;
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
    for(let i=0; i< 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
        count ++
    }
    boxModel.style.borderColor = color;
    if(count > 1) {
        boxModel.removeEventListener("dblclick");

    }
})