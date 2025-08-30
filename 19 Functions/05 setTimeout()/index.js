// SYNTAX:
//       setTimeout(function, delay, param1, param2, ...);


console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");



//%%%%%%%%%%%% With function reference %%%%%%%%%%%%%%%%

function greet() {
    console.log("Hello after 3 seconds!");
}

setTimeout(greet, 3000);



//%%%%%%%%%%%%%%%%%%%%%%%%%%

function sayHello(name) {
  console.log("Hello, " + name + "! (After 4 seconds!)");
}

setTimeout(sayHello, 4000, "Raj");



//%%%%%%%%%%%%%% Canceling the timeout %%%%%%%%%%%%%%%%%%%%%


let timer = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timer);        // cancels the timeout
