// Callback function in javascript
setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x is called");
    y();
}

x(function y() {
    console.log("y is called");
});

// Event listeners
function attachEventListeners() {
    let count = 0;
    document
        .getElementById("clickMe")
        .addEventListener("click", function xyz() {
            console.log("Button clicked", ++count);
        });
}
attachEventListeners();
