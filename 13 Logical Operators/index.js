//----------AND (&&) = Returns true if both conditions are true--------------

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed ");  // both true = Allowed
} else {
    console.log("Not allowed");
}



//----------OR (||) = Returns true if at least one condition is true--------------

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can relax 😴"); // one is true = relax
} else {
    console.log("Work day 💼");
}


//----------NOT (!) = Reverses the boolean value-------------------------------

let isRainy = false;

if (!isRainy) {
    console.log("Go outside ☀️");  // false = true
} else {
    console.log("Stay indoors 🌧️");
}

