//      array.forEach(callback)
//      elements, index, array are provided


let colors = ["Red", "Green", "Blue"];

colors.forEach((color, index, array) => {
    console.log(
        "Color:", color, 
        "| Index:", index, 
        "| Full Array:", array
    );
});


//=====================================



let numbers = [1, 2, 3, 4, 5];

function square(element) {
   let result = Math.pow(element, 2);
   console.log(result);
}

// let cube = (element, index, array) => {
//     array[index] = Math.pow(element, 3);
//     // console.log(result);
// }

function display(element){
    console.log(element);

}
numbers.forEach(square);
numbers.forEach((element, index, array)=>{array[index] = Math.pow(element, 3);});  // Another way of writing
numbers.forEach(display);

