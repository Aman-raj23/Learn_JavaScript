// For definition of these scopes, please go to index.html page linked in the HTML file.

//--------------1. GLOBAL SCOPE------------------

let name = "Raj"; // global variable

function myName() {
    console.log(name);  // can access global variable
}

myName();

console.log(name); // can access outside function too



//--------------2. FUNCTION SCOPE------------------

function greet() {
    let message = "Hello"; // function scope
    console.log(message);  //  works here
}

greet();

console.log(message); // Error: message is not defined



//--------------3. BLOCK SCOPE------------------

if (true) {
    let a = 10;  // block-scoped
    var b = 20;  // NOT block-scoped
}

console.log(b); 

console.log(a); // Error: a is not defined

