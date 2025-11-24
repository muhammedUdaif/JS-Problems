const myButton = document.getElementById("my-btn");
console.log(myButton);
const container = document.getElementById("notification-container");
console.log(container);

let notificationQueue = [];

myButton.onclick = function() {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `
        New Notification
        <span class="close-btn" onclick="closeNotification(this)">&times;</span>
    `;
    container.appendChild(notification);
    notificationQueue.push(notification);

    setTimeout(() => {
        if (notificationQueue.includes(notification)) {
            closeFirstNotification();
        }
    }, 5000);
}

function closeNotification(btn) {
    const notifications = btn.parentElement;
    console.log(notifications);
    notificationQueue = notificationQueue.filter(n => n !== notifications);
    removeNotification(notifications);
}

function closeFirstNotification() {
    const first = notificationQueue.shift();
    if (first) {
        removeNotification(first);
    }
}

function removeNotification(first) {
    first.style.animation = "slideOut 0.4s forwards";
    setTimeout(() => first.remove(), 400);
}
