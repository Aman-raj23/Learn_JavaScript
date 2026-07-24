// Syntax of Promise:-

// const promise = new Promise((resolve, reject) => {

// });



//%%%%%%%%%%%% Example 1: SUCCESSFUL PROMISE %%%%%%%%%%

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Task Completed Successfully");
    }
    else{
        reject("Task Failed");
    }

});

myPromise.then(result => {
    console.log(result);
});



//%%%%%%%%%%%% Example 2: REJECTED PROMISE %%%%%%%%%%%%%%%%


const myPromise = new Promise((resolve, reject) => {

    let success = false;

    if(success){
        resolve("Success");
    }
    else{
        reject("Something Went Wrong");
    }

});

myPromise.catch(error => {
    console.log(error);
});