const arr = [5, 1, 3, 2, 6];

//! Map method
// function double(x) {
//     return x * 2;
// }
// function triple(x) {
//     return x * 3;
// }
// function binary(x) {
//     return x.toString(2);
// }

// const output1 = arr.map(double);
// const output2 = arr.map(triple);
// const output3 = arr.map(binary);

// const output = arr.map(function double(x) {
//     return x * 2
// })
// const output = arr.map((x) => x * 2);

//! Filter method
// function isEven(x) {
//     return x % 2 === 0;
// }

// function isOdd(x) {
//     return x % 2 !== 0;
// }

// const output1 = arr.filter(isEven);
// const output2 = arr.filter(isOdd);
// console.log(output1);
// console.log(output2);

//! Reduce method
// Find the sum of all the values inside an array
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// findSum(arr);

// const output = arr.reduce((acc,curr) => {
//     return acc = acc + curr
// }, 0)
// console.log(output);

// Find the maximum value from the array
// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }
// findMax(arr);

// const output = arr.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr;
//     }
//     return acc;
// }, 0);
// console.log(output);

//! Real life examples for map, filter and reduce
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

// const fullNames = users.map((user) => {
//     return `${user.firstName} ${user.lastName}`;
// });

// const ages = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

// const output = users
//     .filter((user) => user.age < 30)
//     .map((user) => user.firstName);

// const output = users.reduce((acc, curr) => {
//     if (curr.age < 30) {
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, []);
