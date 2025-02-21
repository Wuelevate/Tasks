//script.js

let count = 0;
function updateTime() {
    const now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleDateString() + " - " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

function increaseCount() {
    count++;
    document.getElementById("count").innerText = count;
}

function decreaseCount() {
    count--;
    document.getElementById("count").innerText = count;
}
