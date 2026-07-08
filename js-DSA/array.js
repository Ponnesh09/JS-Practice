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
    // num[i] = Number(prompt("enter "))
}

// console.log(num);


// Q4 find sum of array 

let totalNum = [10,54,32,3,78]
let sum = 0
for(let i=0; i<totalNum.length; i++){
    sum += totalNum[i]
}

// console.log(`sum of array ${sum}`);

// Q5 find max of array

let max = totalNum[0]

for(let i=1; i<totalNum.length; i++){
    if(10 < totalNum[i]){
        max = totalNum[i]
    }
}
console.log(`maximum number of array is ${max}`);



// Q6 find min of array

let min = totalNum[0]

for(let i=1; i<totalNum.length; i++){
    if(10 > totalNum[i]){
        min = totalNum[i]
    }
}
console.log(`minimum number of array is ${min}`);


//Q7 find second max of array 

let maxOne = Math.max(totalNum[0], totalNum[1]);
let maxTwo = Math.max(totalNum[0], totalNum[1]);

for(let i=2; i<totalNum.length; i++){
    if(totalNum[i] > maxOne){
        maxTwo = maxOne
        maxOne = totalNum[i]
    }else if(totalNum[i] > maxTwo && maxOne != totalNum[i]){
        maxTwo = totalNum[i]
     }
}
console.log(maxTwo);


//Q8  find second min of array 

let minOne = Math.min(totalNum[0],totalNum[1]);
let minTwo = Math.min(totalNum[0],totalNum[1]);

for(let i = 2; i< totalNum.length ; i++){
    if(totalNum[i] < minOne){
        minTwo = minOne
        minOne = totalNum[i]
    }else if(totalNum[i] < minTwo && minOne != totalNum[i]){
        minTwo = totalNum[i]
    }
}
console.log(minTwo);


