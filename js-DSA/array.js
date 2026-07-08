// 1at method

let arr = [1,2,3,4]

arr.push(5) //add from last
arr.pop()  // remove from last
arr.push("pushing")
arr.push(true)
arr.push(10)


console.log(arr);
console.log(arr[2]);



//2nd method

let arr1 = new Array(3)
arr1[0]=1;
arr1[1]=2;
arr1[2]=3;
arr1[3]=4;

console.log(arr1.length);
console.log(arr1);


// Q1
let prompt = require('prompt-sync')()

let empArr = []
// empArr[0] = Number(prompt("write "))
// console.log(empArr);


//Q2 

// let num = new Array(5)
// num[0] = Number(prompt("enter "))
// console.log(num);

//this is not work

// Q3 accept value from user


let num = new Array(5);
for(let i=0; i<num.length; i++){
    num[i] = Number(prompt("enter "))
}

console.log(num);


