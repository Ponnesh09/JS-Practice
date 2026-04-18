
// try it in browser
// In browser 
// Console.log(window)                    // it shows window properties
// Console.log(window.document)          // #document
// Console.log(document)                // #document
// Console.dir(document)               // #document
            
// testing code
console.log("JS connected successfully!");

const heading = document.getElementById('heading')
const button = document.getElementById('btn')

button.addEventListener("click" , ()=>{
    heading.innerHTML = "Title changed"
});