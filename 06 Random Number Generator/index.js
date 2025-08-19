
const randomnum = document.getElementById("randomNumber");
const generate = document.getElementById("generate");

let random;
generate.onclick = function() {
    random = Math.floor (Math.random() *100)+1;
    randomnum.textContent = `Random Number: ${random}`;

}