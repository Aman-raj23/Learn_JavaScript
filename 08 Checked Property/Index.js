const checkbox = document.getElementById("checkbox");
const Option1 = document.getElementById("Option1");
const Option2 = document.getElementById("Option2");
const Option3 = document.getElementById("Option3");
const submit = document.getElementById("submit");
const message = document.getElementById("message");
const selectedOption = document.getElementById("selectedOption");


checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            Option1.disabled = false;
            Option2.disabled = false;
            Option3.disabled = false;
        } else {
            Option1.disabled = true;
            Option2.disabled = true;
            Option3.disabled = true;
        }
    } );

submit.onclick = function() {
    if (!checkbox.checked && (Option1.checked || Option2.checked || Option3.checked)) {
        message.textContent = "Please check the checkbox to then Select an option.";
        return;
    }
    if (checkbox.checked) {
        let selected = "";
        if (Option1.checked) {
            selected = "Option 1";
        } else if (Option2.checked) {
            selected = "Option 2";
        } else if (Option3.checked) {
            selected = "Option 3";
        } else {
            selected = "None (No option selected)";
        }
        message.textContent = "You have selected: " + selected;
        // selectedOption.textContent = "Selected Option: " + selected;
    } else {
        message.textContent = "Please check the checkbox to enable options.";
        
    }
}
