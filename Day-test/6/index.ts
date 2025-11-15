// Write a function displayNotifications(notifications) that displays valid messages
// sequentially (2s apart).
// const notifications = ["Welcome!", "Profile updated", "New message received"]


async function displayNotificationsSequential(notifications: string[]) {
    for (const msg of notifications) {
        await new Promise(res => setTimeout(res, 2000));
        console.log(msg);
    }
}

displayNotificationsSequential(["Welcome!", "Profile updated", "New message received"]);

