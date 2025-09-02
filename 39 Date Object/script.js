//%%%%%%%%%% DEFAULT DATE %%%%%%%%%%%%

const date = new Date();

console.log(date);



//%%%%%%%%%% Specific Date %%%%%%%%%%%%

// Date(year, month, day, hour,  minute, second, ms)

let birthday = new Date("2006-10-30");
console.log(birthday);


let d = new Date(2025, 7, 17, 10, 30, 0);
// Months are 0-based = 7 means August
console.log(d);



// %%%%%%%%%%%% Get Methods %%%%%%%%%%%%%%%


let today = new Date();

console.log(today.getFullYear());  
console.log(today.getMonth());     
console.log(today.getDate());      
console.log(today.getDay());      
console.log(today.getHours());    
console.log(today.getMinutes()); 
console.log(today.getSeconds());   
console.log(today.getTime());



// %%%%%%%%%%%%% Set Methods %%%%%%%%%%%%%%%

let datee = new Date();
datee.setFullYear(2030);
datee.setMonth(11);  // December
datee.setDate(25);
datee.setHours(4);
datee.setMinutes(6);

console.log(datee);



// %%%%%%%%%%%% FORMATTING DATES %%%%%%%%%%%%%%%

let to_day = new Date();

console.log(to_day.toDateString());   
console.log(to_day.toTimeString());  

console.log(to_day.toISOString());    


//=========================


let now = Date.now();
console.log(now);