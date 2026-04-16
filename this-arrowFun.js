const user ={
    user : "jon",
    price : 200 ,

    welcomeMessage : function () {
            console.log(`${this.user}  welcome to our website`);
            
    }
}

// user.welcomeMessage()

user.user = 'sam'
// user.welcomeMessage()

//console.log(this);        //out put {}


const chai = function () {
    let userName = "petter chai"
    // console.log(userName);
}
chai()


//Arrow Function

// Explicit with return
let sum = (num1, num2) => {return num1 + num2}
console.log(sum(5,5));

//Implicit without return     
let sum1 = (num1, num2) =>  num1 + num2
console.log(sum1(5,5));




//object in arrow function

// () => ({userName: "ponnesh"})

// const array1 = [1,2,3,4,5]

// array1.forEach(function(){})
// array1.forEach(()=>{})
// array1.forEach(()=>(user))