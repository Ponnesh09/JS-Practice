let prompt = require('prompt-sync')();


// process.stdout.write("hello ")
// process.stdout.write("world")


// let pt = prompt("enter number")
// process.stdout.write(pt)


// Q1 print number of * in vertically

// let num = Number(prompt("Enter number"))

// for(let i= 1 ; i<=num; i++){
//     process.stdout.write("* ");
// }

//Q2 print number of * in horizontally

// let num1 = Number(prompt("Enter number"))

// for(let i = 1; i<= num1; i++){
//     process.stdout.write("* ");

//     console.log(" ");
// }
//     for(let i=1; i<= num1; i++){
//         process.stdout.write("* ")
//     }


//Q3 rectangle pattern

// let n = Number(prompt("enter"))

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write("* ")
//     }
//     console.log(" ");
    
// }



// Q4 right angle triangle 

// let n = Number(prompt("enter"))

// for(let i=1; i<=n ; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log(" ");
    
// }


// Q5 right angle triangle in number

// let n = Number(prompt("enter number"))

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i ; j++){
//         process.stdout.write(j+" ");
        
//     }
//     console.log(" ");
    
// }



 // Q6 right angle triangle in alphabet

// let n = Number(prompt("enter number "))

// for(let i=1; i<=n; i++){
//             let ascii = 65
//     for(let j=1; j<=i; j++){
//         // process.stdout.write(ascii);
//             process.stdout.write(String.fromCharCode(ascii)+" ");
//             ascii ++
//     }
//     console.log(" ");
    
// }

// Q7  inverted right angle triangle

//  let n = Number(prompt("enter number "))

// for(let i=1; i<=n; i++){
//         for(let j=1; j<=n-i+1;j++){
//         process.stdout.write("* ");

//         }
//         console.log(" ");
        
// }

// Q8 mirror right angle triangle

// let n = Number(prompt("enter "))


// for(let i =1; i<=n; i++){

//     //invert
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write("  ");
//     }

//     // right angle
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");

//     }
// console.log(" ");

// }

// Q9 triangle pattern

 let n = Number(prompt("enter "))

 for(let i=1; i<=n; i++){

    for(let j=1; j<=n-i; j++){
        process.stdout.write(" ");
    }

    for(let k=1;k<=i; k++){
        process.stdout.write("* ");

    }
    console.log(" ");
    
 }












