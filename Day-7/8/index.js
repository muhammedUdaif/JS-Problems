// 8. Create a sample social media post, with a Like button, which can be toggled.

const likeBtn = document.querySelector('.like-btn');

let liked = false;
let likeCount = 0;

likeBtn.addEventListener('click', () => {
    liked = !liked;
    if (liked) {
        likeCount++;
        likeBtn.textContent = `Liked (${likeCount})`;
        likeBtn.style.backgroundColor = "blue";
        likeBtn.style.color = "white";
    } else {
        likeCount--;
        likeBtn.textContent = `Likes (${likeCount})`;
        likeBtn.style.backgroundColor = '';
        likeBtn.style.color = '';
    }
});
