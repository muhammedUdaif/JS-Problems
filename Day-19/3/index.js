const myModal = document.getElementById("my-modal");
const myButton = document.getElementById("my-btn");
const closeButton = document.getElementById("my-close")

myButton.onclick = function() {
    myModal.style.display = "block";
}

closeButton.onclick = function() {
    myModal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == myModal) {
        myModal.style.display = "none";
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        myModal.style.display = "none"
    }
})