// function :- key word
// Variable :- name      ( ex :  sayMyName)
// ( ) :- parameters
// { 
// } :- writing definition
// ( ){ } :- function syntax
// Variable :- name      ( ex :  sayMyName)	 :- reference 
// sayMyName ( )  :- execution      [  calling a function ]
// sayMyName( ) :- arguments ( )


function sum (num1 , num2 ){
    let add = num1 + num2
    // let sub = num1 - num2
    console.log(add);
    console.log(sub + " it from out side ");
    
}
// let sub = num1 - num2

// sum(5,5)


function loginMessage (userName){
    // if(userName === undefined)
    if(!userName){
        console.log("please enter userName");
        return
    }
    return `${userName} is just login`
}

// console.log(loginMessage("petter"));
// console.log(loginMessage());


function userLoginStatus (userName = "jon wick"){
    if(!userName){
        console.log("please enter userName");
        return
    }
    return `${userName} is just logged in `
}
// console.log(userLoginStatus());
// console.log(userLoginStatus("red dragon"));


function  totalItemsPrice (item1, item2, item3,...num1){
   return num1
}
// console.log(totalItemsPrice(100, 200, 500, 150, 255, 300));

// . . . num1 = rest operator   . . .spread operator 


//object accessing in function

const user = {
    name : "pet",
    age : 12
}

function handleObject (userObject) {
    console.log(`i am ${userObject.name} `);
}

// first 
// handleObject(user)

// second
// handleObject({
//     name : "petter",
//     age : 45
// })


// array accessing in function

const myArray = [10,20,30,40]

function arrayHandle (getArray) {
    return getArray[1]
}

// console.log(arrayHandle(myArray));


function arrayHandle1 (getArray1) {
    return getArray1[1]
}
// console.log(arrayHandle1([99,88,77,55,]));


