// OG
// (function chai (){
//     console.log("i am classic function of IIFE");
// })
// chai()

//syntax of IIFE ()()
// for multiple IIFE ()(), ()(), ()(),

(function chai (){
    console.log("i am classic function of IIFE");
})(),

//Arrow function of IIFE
( ()=>{console.log("i am Arrow function of IIFE");
} )(),

((name)=>{console.log(`i am Arrow function of IIFE ${name}`);
})("leo")
