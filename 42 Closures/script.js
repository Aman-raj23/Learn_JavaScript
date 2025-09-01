function outer1() {
  let message = "HELLOOOO!";        // variable inside outer function

  function inner1() {
    console.log(message);
  }

  inner1();
}

outer1();  


//%%%%%%%%%%%%%%%%%%%%%%%%%%


function outer2() {
  let count = 0;       

  function inner2() {
    count++; 
    console.log(count);
  }

  return inner2;
}

let counter = outer2();  
counter(); // 1
counter(); // 2
counter(); // 3


