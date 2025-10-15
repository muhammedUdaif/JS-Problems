// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
// Then merge both so each post includes its author’s name and email.
// Don’t use libraries like axios — only fetch and async/await.

async function mergeApiData() {
    try {
        const mergePost = await fetch("https://jsonplaceholder.typicode.com/posts");
        const post = await mergePost.json();

        const mergeUser = await fetch("https://jsonplaceholder.typicode.com/users");
        const user = await mergeUser.json();
        
        const mergedApi = post.map((label) =>{
            const userAuthor = user.find(item => item.id === label.userId);
              return {
                ...label,
                userAuthorName: userAuthor.name,
                userAuthorEmail: userAuthor.email
              }
        })
        console.log(mergedApi);
    }catch(error) {
        console.error(error.message);
    }
}
mergeApiData();