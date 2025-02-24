// a();
// b();

// Function statement
function a() {
    console.log("a is called");
}

// Function expression
var b = function () {
    console.log("b is called");
};

// Function declaration and statement is same

// Anonymous function
// function(){}

// Named function expression
var c = function xyz() {
    console.log("c is called");
};

// Difference between parameters & arguments
function dummy(params) {
    // parameters
    console.log(params);
}
dummy(1, 2, 3); // arguments

// First class functions => Ability to be used like values
// First class citizens
