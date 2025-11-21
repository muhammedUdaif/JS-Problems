document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const dropdown = item.querySelector(".dropdown");
        console.log(dropdown)
        if (dropdown) dropdown.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
        const dropdown = item.querySelector(".dropdown");
        if (dropdown) dropdown.style.display = "none";
    });
});

document.querySelectorAll(".dropdown-item").forEach((subItem) => {
    subItem.addEventListener("mouseenter", () => {
        const subDrop = subItem.querySelector(".sub-dropdown");
        if (subDrop) subDrop.style.display = "block";
    });

    subItem.addEventListener("mouseleave", () => {
        const subDrop = subItem.querySelector(".sub-dropdown");
        if (subDrop) subDrop.style.display = "none";
    });
});