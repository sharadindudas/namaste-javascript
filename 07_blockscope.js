//! Block
// if (true) {
// multiple statements (compount statement)
//     var a = 100;
//     console.log(a);
//   }

//! Block scope
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//! Shadowing
// let a = 10;
// const b = 20;
// var c = 30;
// {
//   let a = 100;
//   const b = 200;
//   var c = 300;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//! Illegal shadowing
// let a = 10;
// {
//   var a = 100;
// }

//! Lexical environment and block scope
const a = 10;
{
  const a = 100;
  {
    const a = 1000;
  }
}
