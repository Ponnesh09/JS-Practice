// scope

// Local Scope (Function Scope)
// Definition: Variables declared inside a function are in the local scope of that function. 
// They can only be accessed within that specific function and are destroyed once the function finishes executing.

// block scope 
// Definition: Introduced in ES6 for JavaScript, 
// block scope confines variables to a specific block of code wrapped in curly braces { }, 
// such as those used in if statements or for loops. 
// Only variables declared with let or const have block scope; var does not.

// global scope
//Definition: A variable has global scope when it is declared outside of all functions or code blocks. 
// These variables are accessible from anywhere in the program.
let  globalScopeVal = "i am Global Scope"


// Scope => {}


// // Local Scope (Function Scope)

function localScopeEx () {
    let localVal = "i am local scope"
    //console.log(localVal); // Accessible here
    //console.log(`i am from local scope and this one is from ${globalScopeVal}`);
}
localScopeEx();

//console.log(localVal); // Error: localVar is not defined

// block scope 
if(true){
    let blockScopeVal = "i am block scope"
    //console.log(blockScopeVal); // Accessible here
    //console.log(`i am from block scope and this one is from ${globalScopeVal}`);
}
//console.log(blockScopeVal);  // Error: localVar is not defined

function globalFunction () {
    //console.log(globalScopeVal);
}
globalFunction()


// console.log(globalScopeVal);



// Scopes will be differentiated like plain JS code and node-based code 
// so learn it window node too