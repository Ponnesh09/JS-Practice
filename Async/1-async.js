// Log window 

// setInterval(() => {
    
// }, interval);


// setTimeout(() => {
    
// }, timeout);


// clearInterval

// clearTimeout



// setTimeout(function(){
//     console.log("print after 1 second");
    
// },5000)


// setTimeout(function,1000)  ==> reference
// setTimeout(function(),1000) ==> execute


// const sayName = function(){
//     console.log("ponnesh");
// }
// setTimeout(sayName , 2000)


// const changeText = function(){
//     document.querySelector('h1').innerHTML = "hii i am developer"
// }
// setTimeout(changeText , 3000)


// const clear = setTimeout(changeText , 3000)
// clearTimeout(clear)  // dose't work 


// example one

// const changeText = function(){
//     document.querySelector('h1').innerHTML = "welcome to JS tutorial"
// }

// let setTimeId;

// document.querySelector('#start').addEventListener('click', function(){
//     console.log("start button clicked");
//     setTimeId = setTimeout(changeText, 3000)
// })

// document.querySelector('#stope').addEventListener('click', function(){
//     console.log("stope button clicked");
//     clearTimeout(setTimeId)    
         
// })



// Key Concept (Important)
// setTimeout() returns an ID
// clearTimeout() needs that ID to stop it



const sayDate = function (str){
    console.log(str, Date.now());
    
}
// console.log(sayDate);


// setInterval(sayDate, 1000, "hii")

// const intervalId2 =  setTimeout(sayDate, 5000, "from set time out")

// clearTimeout(intervalId2)

// const intervalId = setInterval(sayDate, 1000, "time now")


// clearInterval(intervalId)








