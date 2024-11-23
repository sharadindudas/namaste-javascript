// Shortest js program is no code

var a = 10 // global space
function b(){ // global space
    var x = 10 // not global space
}

console.log(window.a) // accessing a from window object 
console.log(a) // global space
console.log(x) // not defined
console.log(this.a) // this refers to window