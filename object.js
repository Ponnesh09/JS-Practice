// singleton 
// object.create

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name :"petter",
    age : 12,
    email: "spider@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["monday", "sunday"],
    [mySym] : "mySymbol"
}

// console.log(jsUser.email);
// console.log(jsUser.name);                       // dot notation
// console.log(jsUser["isLoggedIn"]);             // bracket notation
// console.log(jsUser[mySym]);

jsUser.email = "venom@gmail.com"
// console.log(jsUser.email);
// Object.freeze(jsUser);                          //Object.freeze()
jsUser.email = "carnage@gmail.com"
// console.log(jsUser.email);



jsUser.greeting = function(){
    console.log(`hello js this is first function in object `);
}

jsUser.greetingTwo = function(){
    console.log(`hello js this is first function in object 2 my name ${this.name}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


//part 2

// singleton object 
// const instagramId = new Object()

// non-singleton object 
const inst = {}

inst.id = "123lpm"
inst.name = "petter"
inst.isLoggedIn = true

// console.log(inst);

//nested object
const regularUser = {
    email : "nobody@gmail.com",
    userFullName: {
        fullName:{
            firstName : "petter",
            lastName : "parker",
        }
    }
}
// console.log(regularUser.userFullName.fullName.lastName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// let obj3 = obj1 + obj2
// console.log(obj3);              //bad try


// const obj3 = Object.assign(obj1,obj2)           // Object.assign
// console.log(obj3);

//one more way best one
 const obj4 = {...obj1 , ...obj2}          //spread operator ...
//  console.log(obj4);
 
//real world data format

const userData = [
    {
        id : 1,
        email : "user1@getMapfile.com"
    },
    {
        id : 2,
        email : "user2@getMapfile.com"
    },
    {
        id : 3,
        email : "user3@getMapfile.com"
    },
    {
        id : 4,
        email : "user4@getMapfile.com"
    },
]

//  console.log(userData[1].email);           // it act as index number 



//  console.log(Object.keys(inst));
//  console.log(Object.values(inst));
//  console.log(Object.entries(inst));             // key and vale pair ['name', 'petter']
 
// it check
// console.log(inst.hasOwnProperty("isLoggedIn"));
//  console.log(inst.hasOwnProperty("isLoggedOut"));    //.hasOwnProperty
 
 
//  constructor function in object 

function User (name, age){
    this.name = name;
    this.age = age;
    this.greeting = function(){
        console.log(`hii my name is ${this.name} and i am ${this.age} years old`);  
    };
}

const user1 = new User ("ponnesh",90);
const user2 = new User ("gopal",69);

console.log(user1.name);
user1.greeting();


