// Logic control ,control flow 

// //syntax
// if (condition) {
    
// }


// =  assigned operator
// ==   equal check
// ===  strict check   ( value and datatype )

//if

const userLoggedIn = true

if(userLoggedIn){
    // console.log("user have a permission");
}

//  let temp = 30
// if (temp < 50){
//     console.log("temp is less than 50 ");
// }
// console.log("grater than 50");

// let balance = 200
// if(balance < 500) console.log("text"),
//     console.log("text1")



// This is immature code 

// const balance = 100

// // if (balance > 500) console.log("test"),console.log("test2");


// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else {
//   console.log("Less than 1200");
// }


// Better Approach (Using Function)

// function checkBalance(balance){
    // if(balance < 500) return "less than 500";
    // if(balance < 700) return "less than 700";
    // if(balance < 900) return "less than 900";
    // if(balance < 1200) return "less than 1200";
    // return "less than 1500 "
// }

// console.log(checkBalance(1300));


// Advanced (Best Practice)

// If values grow, use a data-driven approach

const amount = [
    {limit : 500 , message :"less than 500"},
    {limit : 1000 , message :"less than 1000"},
    {limit : 1500 , message :"less than 1500"},
    {limit : 2000 , message :"less than 2000"},
];

function checkBalance (balance){
    for(const price of amount){
        if(balance < price.limit){          //condition
            return price.message    
        }
    }
    return "less than 2500 "
}

// console.log(checkBalance (2100));



// One-liner (not always recommended, but good to know)


// ternary operators    =>  condition ? true : false
// condition ? true : condition ? true : condition ? true : condition ? true : condition ? true : false ;


const balance = 1000
const result = balance < 500 ?  "less than 500" 
               : balance < 1000  ? "less than 1000" 
               : balance < 1500 ? "less than 1500" 
               : balance < 2000 ? "less than 2000" 
               : "less than 2500" ;

// console.log(result);




let loginAccess = true;
let areYouTeamMember = true;

// if(loginAccess && areYouTeamMember && 2==3){
//         console.log("you have a permission to enter this portal");
        
// }

// && (AND), || (OR), and ! (NOT).

if(loginAccess && areYouTeamMember){   
    // console.log("this is from AND :- you have a permission to enter this portal"); 
}

if (loginAccess || areYouTeamMember) {
    // console.log(" this is from OR :- you have a permission to enter this portal");
}


// Switch case 

// switch case syntax 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


let day  = "monday";

switch (day){
    case "monday" :
        // console.log("this is Monday");
    break;

    case "tuesday" : console.log("this is Tuesday");
    break;

    case "wednesday" : console.log("this is wednesday");
    break;

    case "thursday" : console.log("this is thursday");
    break;

    case "friday" : console.log("this is friday");
    break;

    case "saturday" : console.log("this is saturday");
    break;

    case "sunday" : console.log("this is sunday");
    break;

    default : console.log("please enter valid day");  

}

// if else

// Syntax
// if (condition) {
// } else {
// }

// let result1 = true;
// if (result1) {
//     console.log("if condition true execute this  as true status");
// } else {
//     console.log("if condition false execute this  as false status");
// }


// let userEmail = " nothing@gmail.com"

// if(userEmail){
//     console.log("we got an email");
// }else{ console.log("enter your email");
// }                                                //true


// let userEmail = " "
// if(userEmail){console.log("we got email");
// }else{console.log("enter your email");
// }                                                //true


// let userEmail = []
// if(userEmail){console.log("we got");
// }else{console.log("enter your email");
// }



// // if else 
// Falsie value    false , 0 , -0 , BigInt On, “” , null , undefined , NaN   
// Truthy value   truth , “0” , ‘false’ , “ ” , [] , {} , function(){} 


// let newArr = []

// if(newArr.length === 0){
//     console.log("array is empty");
// }else{console.log("we got data");
// }


let myObj = {}

// if(myObj.length === 0){              // we got props                    
//     console.log("object is empty");
// }else{console.log("we got props");
// }                                        

// if(Object.keys(myObj).length === 0){        // object is empty
// //     // console.log("object is empty");
// }else{console.log("we got props");
// }


// Nullish coalescing operator  (??) : null undefined

// The nullish coalescing operator (??) is a logical operator in JavaScript 
// that returns its right-hand operand when the left-hand operand is null or undefined, 
// and otherwise returns the left-hand operand. 
// It provides a secure way to set default values, 
// ignoring other falsy values like 0 or "" (empty strings)

let val1; 
val1 = 5 ?? 10 ,                   //  5
val1 = null ?? 10 ,                //  10
val1 = undefined ?? 15 ,           //  15
val1 = null ?? 10 ?? 50            //10
// console.log(val1);


//ternary operator  condition ? true : false 

let iceCream = 500  
iceCream <= 100 ? console.log("Less than 100") : console.log("More than 100");

 
