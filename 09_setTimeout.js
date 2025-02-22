//! We have to write a timer function that counts till 5

/*
setTimeout => () => { console.log("Count: ", i) } // 1000ms -> 1s
setTimeout => () => { console.log("Count: ", i) } // 2000ms -> 2s
setTimeout => () => { console.log("Count: ", i) } // 3000ms -> 3s
setTimeout => () => { console.log("Count: ", i) } // 4000ms -> 4s
setTimeout => () => { console.log("Count: ", i) } // 5000ms -> 5s
*/

//! Using var (problem)
// function timer() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log("Count: ", i);
//         }, i * 1000);
//     }
//     console.log("Timer works !!!");
// }

//! Using let (1st solution)
// function timer() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log("Count: ", i);
//         }, i * 1000);
//     }
//     console.log("Timer works !!!");
// }

//! Using var (2nd solution)
function timer() {
    for (var i = 1; i <= 5; i++) {
        count(i);
    }

    function count(x) {
        setTimeout(() => {
            console.log("Count: ", x);
        }, x * 1000);
    }

    console.log("Timer works !!!");
}
timer();
