//! Using var (problem)
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     console.log("Iteration: ", i);
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namaste Javascript");
// }
// x();

//! Using let
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     console.log("Iteration: ", i);
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namaste Javascript");
// }
// x();

//! Using var (fix)
function x() {
  for (var i = 1; i <= 5; i++) {
    console.log("Iteration: ", i);
    function close(x) {
      setTimeout(() => {
        console.log("Callback function called: ", x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Namaste Javascript");
}
x();
