// 10. Show hidden list items when user clicks this shortcut key: shift + a.

document.addEventListener("keydown", (e) => {
    if(e.shiftKey && e.key.toLowerCase() === "a") {
        const listItems = document.querySelectorAll(".myList li");

        for(let i=0; i< listItems.length; i++) {
            if(listItems[i].classList.contains("hide")) {
                listItems[i].classList.remove("hide");
            }
        }
    }
});




