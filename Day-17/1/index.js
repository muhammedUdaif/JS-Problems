let currentPage = 1;
let isLoading = false;

async function fetchPosts() {
    if (isLoading) return;
    isLoading = true;

    const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`;

    try {
        showLoader(true);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }

        const data = await response.json();
        renderPosts(data);

        currentPage++; 
    } catch (error) {
        console.error("Error fetching posts:", error);
    } finally {
        showLoader(false);
        isLoading = false;
    }
}

function renderPosts(posts) {
    const container = document.getElementById("container");

    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        container.appendChild(div);
    });
}

function showLoader(visible) {
    let loader = document.getElementById("loader");
    console.log(loader)

    if (!loader) {
        loader = document.createElement("div");
        loader.id = "loader";
        loader.textContent = "Loading...";
        loader.style.textAlign = "center";
        loader.style.margin = "20px 0";
        document.body.appendChild(loader);
    }

    loader.style.display = visible ? "block" : "none";
}

window.addEventListener("scroll", () => {
    const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

    if (bottom) {
        fetchPosts();
    }
});

document.addEventListener("DOMContentLoaded", fetchPosts);
