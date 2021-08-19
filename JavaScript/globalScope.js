// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
    let b=10+a;
    return b;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3
console.log(greet());