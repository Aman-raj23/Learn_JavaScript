let temp = document.getElementById("temp");
let result = document.getElementById("result")
let toCelcius = document.getElementById("toCelsius");
let toFahrenheit = document.getElementById("toFahrenheit");

let tempValue;

function convertTemperature() {
    tempValue = Number(temp.value);

    if (toCelsius.checked) {
        let celcius = (5 / 9) * (tempValue - 32);
        result.textContent = celcius + " °C";
    }
    else if (toFahrenheit.checked) {
        result.textContent = (9 / 5) * (tempValue + 32)  + "°F";
    }
    else {
        result.innerHTML = "Please select a conversion option.";
    }
}