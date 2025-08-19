const label = document.getElementById('label');
const descrease = document.getElementById('descrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let count = 0;

descrease.onclick = function(){
    count--;
    label.innerHTML = count;
}

reset.onclick = function(){
    count= 0;
    label.textContent = count;
}

increase.onclick = function(){
    count++;
    label.textContent = count;
}