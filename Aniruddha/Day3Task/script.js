
// For Current Date and Time
function time() {
    const now = new Date();

    // For Date
    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear();

    //For Time
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('time').innerText = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(time, 1000); // Update every second
time(); // Initialize clock immediately

// For Counter
let count = 0;

function counter() {
    document.getElementById('counter').innerText = `Count: ${count}`;
}
function increase() {
    count++;
    counter();
}

function decrease() {
    count--;
    counter();
}

let increaseBtn = document.getElementById('increaseBtn');
increaseBtn.addEventListener("click", increase);

let decreaseBtn = document.getElementById('decreaseBtn');
decreaseBtn.addEventListener("click", decrease);
