//Object literal 

const user = {
    name : "petter",
    age : 30,
    getUser : function(){
        console.log(`hii my name is ${this.name} and i am ${this.age} years old`);
        
    }
    // greeting : function(){
    //     console.log("got user detail from database");
    // },

}

// console.log(user.name);
// console.log(user.greeting());
// console.log(user.getUser());



// Types of Constructors
// JavaScript supports two primary ways to define constructors: 
// Constructor Functions (Pre-ES6): Regular functions invoked with the new keyword. By convention, they are named with a capital letter (PascalCase).
// Class Constructors (ES6+): A special constructor() method defined inside a class block. This is the modern, preferred syntax.
// Built-in Constructors: JavaScript provides native constructors like new Object(), new Array(), new Date(), and new Map() to create built-in object types. 

//Constructor Functions

function Person(username,isLogeCount,isLoggedIn){
    this.username = username;
    this.isLogeCount = isLogeCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new Person("petter", 20 , true)
const userTwo = new Person("jon", 34 , false)

// console.log(userOne);
// console.log(userTwo);



//Constructor have operator instanceof  

function Car(make  ,model ,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car("Honda", "accord" , 1998)

// console.log(auto instanceof Car);       //true
// console.log(auto instanceof Object);    //true


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


function sum(num){
    return num*5
}
sum.power = 2       

// console.log(sum(5));
// console.log(sum.power);
// console.log(sum.prototype);       //{}


function createUser(userName, score){
    this.userName = userName;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`this is score ${this.score}`);
    
}

// const user1 = createUser("petter", 20)
// console.log(user1);                           //not gives output undefined

const user2 = new createUser("jon" , 34)
console.log(user2);

// user1.printMe() error
// user2.printMe()         //this is score 34
user2.increment()
