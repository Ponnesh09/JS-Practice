

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
// console.log(my1);
// console.log(myArr)

const my2 = myArr.splice(1, 3)        // it change the original array value also
// console.log(my2);
// console.log(myArr)


//joining two array

let my1Arr = ["red","white", "black"]
let my2Arr = ["orange","green","blue"]

// my1Arr.push(my2Arr)
// console.log(my1Arr); not 

let allColor = my1Arr.concat(my2Arr)      // concat
// console.log(allColor);

// best way 
const all_Color = [...my1Arr,...my2Arr]       // ... 
// console.log(all_Color);


const new_arr = [1,2,3,[4,5],6,7,[8,9,[1,1]]]
const real_new_arr = new_arr.flat(Infinity)       // flat
// console.log(real_new_arr);

// console.log(Array.isArray("jon"));                  //Array.isArray
// console.log(Array.from("petter parker"));           //Array.from
// console.log(Array.from({name: "leo"}));        //When we try to convert object into array it  returns empty array


let val1 = 10;
let val2 = 20;
let val3 = 30;

let total = Array.of(val1, val2, val3);      //Returns a new array from a set of elements. [10, 20, 30]
console.log(total);


