console.log(x);
greet();

var x = 10;
function greet() {
  console.log("Namaste Javascript");
}

// By removing the variable x and logging it will cause reference error (not defined)

// By using other functions (arrow and anonymous), it will behave just like any other variable (memory allocation like variable)
welcome();
var welcome = () => {
  console.log("Welcome Javascript");
};
