// Prototype  understand 

let myName = "hitesh"
let mychannel = "chai     "

// console.log(myName.trueLength);

let myHero = ["thor","spiderMan"]

let heroPower ={
    thor :"thunder",
    spiderMan : "sling",

    getSuperPower : function (){
        console.log(`the spider man power is ${this.spiderMan}`);
        
    }
}

// how to insert object 
Object.prototype.ponnesh = function(){
    console.log("ponnesh super power id  wast of thinking");
    
}
// heroPower.ponnesh();

// how to insert array 
Array.prototype.hiPonnesh = function(){
    console.log("hii i am array my power is collecting set of elements");
}

// myHero.ponnesh()
// myHero.hiPonnesh()
// heroPower,hiPonnesh() error 


// console.log(heroPower.getSuperPower());
// console.log(myHero);


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachSupport             //isAvailable: false
}

//  console.log(TASupport.__proto__);


 Teacher.__proto__ = User
//  console.log(User);
 

//modern syntax

Object.setPrototypeOf(TeachSupport , Teacher)

let anotherUser = "cmPunk wwe champion"

String.prototype.trueLength = function(){
        console.log(`${this}`);
         console.log(`the true length is ${this.trim().length}`);
  
}
// anotherUser.trueLength();     // 19 space also countable


