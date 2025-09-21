const days = document.getElementById("days");
const checkday = document.getElementById("checkday");
const result = document.getElementById("result");

checkday.onclick = function() 
{

    const dayValue = Number(days.value);

    switch (dayValue) {
        case 1:
            result.textContent = "Monday";
            break;
        case 2:
            result.textContent = "Tuesday";
            break;
        case 3:
            result.textContent = "Wednesday";
            break;
        case 4:
            result.textContent = "Thrusday"
            break;
        case 5:
            result.textContent = "Friday";
            break;
        case 6:
            result.textContent = "Saturday";
            break;
        case 7:
            result.textContent = "Sunday";
            break;
        default:
            result.innerHTML = `${dayValue} is not a valid day`;
            break;
    }
};
