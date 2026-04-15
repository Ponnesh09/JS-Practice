// function :- key word
// Variable :- name      ( ex :  sayMyName)
// ( ) :- parameters
// { 
// } :- writing definition
// ( ){ } :- function syntax
// Variable :- name      ( ex :  sayMyName)	 :- reference 
// sayMyName ( )  :- execution      [  calling function ]
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


