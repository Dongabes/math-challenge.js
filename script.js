// First Try Myself

// let x;
// let y;

// x = Math.floor(Math.random() * 100 + 1);
// y = Math.floor(Math.random() * 50 + 1);

// let p = String(x + y);
// let j = String(x - y);
// let z = String(x * y);
// let g = String(x / y);
// let h = String(x % y);


// console.log(x)
// console.log(y)
// console.log(p)
// console.log(j)
// console.log(z)
// console.log(g)
// console.log(h)




//Corrected
let x;
let y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

let p = `${x} + ${y} = ${x + y}`;
let j = `${x} - ${y} = ${x - y}`;
let z = `${x} * ${y} = ${x * y}`;
let g = `${x} / ${y} = ${x / y}`;
let h = `${x} % ${y} = ${x % y}`;

console.log(p);
console.log(j);
console.log(z);
console.log(g);
console.log(h);
