

let myArrOne = ["red", "blue", "purple", "silver"]
// console.log(myArrOne);

let mixedArr = ["purple", "silver",3,4,5]
// console.log(mixedArr);

let myArr = [1,2,3,4,5,6]
// console.log(myArr);

myArr.push(7)
// console.log(myArr);     // push value from last index

myArr.pop(7)
// console.log(myArr);     // pulls the value from last index

myArr.unshift(8)               // it add value in 0 index
// console.log(myArr);

myArr.shift()                   // it remove first index value
// console.log(myArr);            


// console.log(myArr.includes(5));      // it gives true or false value 

// console.log(myArr.indexOf(5));        // it gives output as index value

let myArrTwo = myArr.join()
// console.log(myArrTwo);

const my1 = myArr.slice(1, 3)
console.log(my1);
console.log(myArr)

const my2 = myArr.splice(1, 3)        // it change the original array value also
console.log(my2);
console.log(myArr)


