// How to accept User Input

// 1. EASY WAY = WINDOW PROMPT
// 2. PROFESSIONAL WAY = HTML TEXTBOX


//----EASY WAY----


// let username;

// username = window.prompt("Fill your username!");
// console.log(username);



//----PROFESSIONAL WAY----

let firstName;
let lastName;
let age;

document.getElementById("mySubmit").onclick = function(){
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    age = document.getElementById("myAge").value;
    console.log(firstName +" "+ lastName);
    // console.log(lastName);
    


}

