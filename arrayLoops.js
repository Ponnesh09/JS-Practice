// high Order array loop 


// data format 
// ["", "",""]
// [{},{},{}]

//We fetch value using   .notation, []notation

// syntax of for of loop
// for (const element of object) {
    
// }


const arr = ["one","two","three","four","five"]

for(const num of arr){
    // console.log(num);
    
}


let greeting = "hii good morning"

for(const greet of greeting){
    // console.log(`each character is ${greet}`);
      
}

// map 

const map = new Map()

map.set('IND',"India")
map.set('USA',"America")
map.set('UK',"United Kingdom")
map.set('IND',"India")

// console.log(map);


// for of loop using in map

for(const[key,value] of map){
    // console.log(key , '-:', value); 
}


// for of in object

// const myObject = {
//     js : "JavaScript",
//     cpp : "c-plus",
//     py : "Python",
// }

// for(const[key , value] of myObject){       // object is not iterable
//     // console.log(key, '-', value);
    
// }


//for in loop

// Syntax
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js : "JavaScript",
    cpp : "c-plus",
    py : "Python",
}


for(const key in myObject){
    // console.log(key);
    
}

for(const key1 in myObject){
    // console.log(myObject[key1]);
}

for(const key in myObject){
    // console.log(`${key} full form is ${myObject[key]}`);
}

// for in using in array

const num = [1,2,3,4,5,6]

for(const key in num){
    console.log(num[key]);
    
}

