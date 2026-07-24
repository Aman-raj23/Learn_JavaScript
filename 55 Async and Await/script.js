//=========== Async Syntax ============

// async function functionName() {

// }



//=========== Await Syntax ============

// let result = await promise;


function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function displayData() {
    console.log("Loading...");

    const result = await getData();

    console.log(result);
}

displayData();