let users = [];

async function getData() {
    try {
          const response = await fetch("https://randomuser.me/api/?results=5");
          if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
          }
          const result = await response.json();
          users = result.results;
          displayUsers(users);
          console.log(users);
        } catch (error) {
            console.error(error.message);
        }
}

function displayUsers(usersToDisplay) {
    const usersContainer = document.getElementById("users");
    usersContainer.innerHTML = "";

    usersToDisplay.forEach(user => {
    const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="${user.name.first}" />
        <div>
            <b>${user.name.first} ${user.name.last}</b>
            <br/>
            ${user.email}
        </div>`;
        usersContainer.appendChild(userDiv);
    });
}

document.getElementById("shuffleBtn").addEventListener("click", getData);

document.getElementById("search").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm)
    );
    displayUsers(filteredUsers);
});

getData();