// const days = document.querySelector('.parent')
// console.log(days);

// console.log(parent.children);
// console.log(parent.children[1]);



// const days = document.querySelector('.parent')

// undefined

// console.log(days)
// //VM116:1 <div class=​"parent">​…​</div>​<div class=​"day">​mon​</div>​<div class=​"day">​tue​</div>​<div class=​"day">​wed​</div>​<div class=​"day">​thu​</div>​<div class=​"day">​fri​</div>​<div class=​"day">​sat​</div>​<div class=​"day">​sun​</div>​</div>​
// undefined
// console.log(parent.children)
// //VM243:1 undefined
// undefined
// console.log(parent)
// undefined
// console.log(parent.children[0]) 
// //VM502:1 Uncaught TypeError: Cannot read properties of undefined (reading '0')
   

// const parent = document.querySelector('.parent') 
// undefined

// console.log(parent)
// // <div class=​"parent">​<div class=​"day">​mon​</div>​<div class=​"day">​tue​</div>​<div class=​"day">​wed​</div>​<div class=​"day">​thu​</div>​<div class=​"day">​fri​</div>​<div class=​"day">​sat​</div>​<div class=​"day">​sun​</div>​</div>​

// undefined

// console.log(parent.children)
// // HTMLCollection(7) [div.day, div.day, div.day, div.day, div.day, div.day, div.day]0: div.day1: div.day2: div.day3: div.day4: div.day5: div.day6: div.daylength: 7[[Prototype]]: HTMLCollection

// undefined

// console.log(parent.children[1]) 

// // 1 <div class=​"day">​tue​</div>​

// undefined

// console.log(parent.children[1]).innerHTML
// // <div class=​"day">​tue​</div>​



const parent = document.querySelector('.parent')
console.log(parent.children)


// for (let i = 0; i < parent.children; i++) {
//     const element = parent.children[i].innerHTML;
    
// }

console.log(parent.children[1]);

console.log(parent.children[1].style.color = 'orange');

console.log(parent.firstElementChild)    //monday
console.log(parent.lastElementChild);       //sunday


const dayOne = document.querySelector('.day')
console.log(dayOne);

console.log(dayOne.parentElement);

console.log(dayOne.nextElementSibling);  //tus

console.log("NODE " + parent.childNodes);    



//create new element in DOM

const div = document.createElement('div')
console.log(div);

div.className = "divCla"
div.id = Math.round(Math.random() * 10 + 1) // id will change every time

div.setAttribute("title", "generate title")        // title = "generate title"
div.style.color = "red"
div.style.padding = "10px"             

// div.innerHTML = " hii"     XXX  
 
const newText = document.createTextNode("adding new test")
div.appendChild(newText)     //adding from last

document.body.appendChild(div)








 


