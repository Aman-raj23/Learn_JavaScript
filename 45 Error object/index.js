// ===== Creating an Error Object (built-in:- .name, .message, .stack) ==========

// let err = new Error("Something went wrong!");
// console.log(err.name);    
// console.log(err.message); 



// //======= Throwing Your Own Error ================


// try{
//     let age = prompt("Enter your age for voting");
//     age = Number.parseInt(age);
//     if(age < 18){
//         throw new Error ("Age should be more than 18");
//     }
//     else if(isNaN(age)){
//         throw new Error("Enter a valid age");
//     }
//     else{
//         console.log("You are eligible");
//     }
// }
// catch(error){
//     console.error(error);
// }



// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


class ProductNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "ProductNotFoundError";
    }
}

class InvalidQuantityError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidQuantityError";
    }
}

function processOrder(product, quantity) {
    const products = ["laptop", "phone", "tablet"];

    if (!products.includes(product)) {
        throw new ProductNotFoundError(`Product "${product}" is not available.`);
    }

    if (quantity <= 0) {
        throw new InvalidQuantityError("Quantity must be at least 1.");
    }

    if (Math.random() > 0.7) {  
        throw new Error("Payment failed! Please try again.");
    }

    return `Order confirmed: ${quantity} ${product}(s) purchased successfully.`;
}

try {
    
    let product = prompt("Enter product Name");
    let quantity = prompt("Enter product's Quantity");
    quality = Number.parseInt(quantity);
    let result = processOrder(product, quantity);

    console.log(result);
} 
catch (err) {
    if (err instanceof ProductNotFoundError) {
        console.error("Product Error:", err.message);
    } 
    else if (err instanceof InvalidQuantityError) {
        console.error("Quantity Error:", err.message);
    } 
    else {
        console.error("General Error:", err.message);
    }
} 
finally {
    console.log("Order process finished (success or failure).");
}

