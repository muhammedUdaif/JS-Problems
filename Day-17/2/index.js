const containerEl = document.getElementById("container-section");
const images = document.querySelectorAll(".images");
console.log(images);
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("Prev");

let index = 0;
let interval;

function showImages(id) {
    images.forEach((image, i) => {
        image.style.display = i === id ? "block" : "none";
    })
}

function nextSlide() {
    index = (index + 1) % images.length;
    showImages(index);
}

function prevSlide() {
    index = (index -1 + images.length) % images.length;
    showImages(index);
}

function autoPlay() {
    interval = setInterval(nextSlide, 3000)
}

function clearAutoPlay() {
    clearInterval(interval);
}

containerEl.addEventListener("mouseleave", autoPlay);
containerEl.addEventListener("mouseenter", clearAutoPlay);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showImages(index);
autoPlay();