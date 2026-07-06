let prompt = require('prompt-sync')();


// process.stdout.write("hello ")
// process.stdout.write("world")


// let pt = prompt("enter number")
// process.stdout.write(pt)


// Q1 print number of *

let num = Number(prompt("Enter number"))

for(let i= 1 ; i<=num; i++){
    process.stdout.write("* ");
}

