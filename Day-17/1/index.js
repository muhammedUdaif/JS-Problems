async function PostData() {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`;

    try {
        const responce = await fetch(url);
        if(!responce.ok) {
            throw new Error(responce.status);
        }

        const data = await responce.json();
        console.log(data);
        renderPost(data);

    } catch (error) {
        console.log(`Error fetching`, error);
    }
}

function renderPost(posts) {
    const container = document.getElementById("container");
    
    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = 
        `<h3>${post.title}</h3>
        <p>${post.body}</P>`;

        container.appendChild(div);
    })

}

window.addEventListener("scroll", () => {
    const scrollSeciton = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if(scrollSeciton) {
        PostData();
    }
});

document.addEventListener("DOMContentLoaded", PostData);
