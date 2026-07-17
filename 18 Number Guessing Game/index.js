let inputNum = document.getElementById("inputNum");
let btn = document.getElementById("btn");
let message = document.getElementById("message");
let attempts = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");

let min = 1;
let max = 100;
let randomNum = Math.floor(Math.random()*(max-min+1)) + min;

let attempt = 0;

btn.addEventListener("click", function() {
    let number = parseInt(inputNum.value);
    attempt++;
    attempts.textContent = `Attempts: ${attempt}`;
    
    if (isNaN(number)) {
        message.textContent = "Please enter a number.";
    }
    else if (number < min || number > max) {
        message.textContent = `Please enter a number between ${min} and ${max}.`;
    } else if (number === randomNum) {
        message.textContent = `Congrats! You've guessed the number ${randomNum}.`;  
    } else if (number < randomNum) {
        message.textContent = `Too low! Try again.`;
        inputNum.value = '';
    } else {
        message.textContent = `Too high! Try again.`;
        inputNum.value = '';
    }
});

resetBtn.addEventListener("click", function() {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    attempt = 0;
    // attempts.textContent = `Attempts: ${attempt}`;
    message.textContent = `Game reset! Guess a number between ${min} and ${max}.`;
    inputNum.value = '';
});

