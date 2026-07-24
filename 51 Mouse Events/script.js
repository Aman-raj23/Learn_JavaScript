function simulateClick() {
    // Get the element to send a click event
    const cb = document.getElementById("checkbox");

    // Create a synthetic click MouseEvent
    let evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
    });

    // Send the event to the checkbox element
    cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);