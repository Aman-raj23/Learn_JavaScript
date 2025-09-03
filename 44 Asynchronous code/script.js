// console.log("Start");

// setTimeout(() => {
//     console.log("Processing... (after 2 seconds)");
// }, 2000);

// console.log("End");
 
// // In above code setTimeout runs later, without blocking the rest of the program.



//=========Common Ways to Handle Async Code (Callback) ========

function func1(callback){
    console.log('Start');
    setTimeout(() => {console.log('Processing... (after 4 seconds)');
                     callback();}, 3000);
}

function func2(){
    console.log('End');
}

func1(func2);