let counter = 0;

const counterDisplay = document.getElementById("counter");
const messageDisplay = document.getElementById("message");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

function updateCounter() {
    counterDisplay.textContent = counter;
}

function incrementCounter() {
    counter++;
    updateCounter();
    messageDisplay.innerHTML = "Increased by 1!";
}

function decrementCounter() {
    counter--;
    updateCounter();
    messageDisplay.innerHTML = "Decreased by 1!";
}

function resetCounter() {
    counter = 0;
    updateCounter();
    messageDisplay.innerHTML = "Counter reset!";
}

