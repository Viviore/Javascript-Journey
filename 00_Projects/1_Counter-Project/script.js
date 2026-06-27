const displayDigit = document.getElementById("displayDigit");
const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const increaseButton = document.getElementById("increaseBtn");
let count = 0;

decreaseButton.onclick = function() {
    count--;
    displayDigit.textContent = `${count} Numbers in Total.`;
}

resetButton.onclick = function() {
    count = 0
    displayDigit.textContent = `${count} Numbers in Total.`;
}

increaseButton.onclick = function() {
    count++;
    displayDigit.textContent = `${count} Numbers in Total.`;
}