
// try it in window   (BROWSER) it little easer

//All DOM selector node list and html collection 

document.getElementById('title')
// output 
/* <h1 id=​"title">​All DOM Elements​</h1>​    */

document.getElementById('title').id
// output
'title'

document.getElementById('title').class
// output
undefined

document.getElementById('title').className
// output
'titleClass'

document.getElementById('title').classList
// output
// DOMTokenList ['titleClass', value: 'titleClass']0: "titleClass"length: 1value: "titleClass"[[Prototype]]: DOMTokenList 

document.getElementById('title').classList.add
// output
// ƒ add() { [native code] } 

// Get Attributes

document.getElementById('title').getAttribute
// output
// ƒ getAttribute() { [native code] } 

document.getElementById('title').getAttribute()
// output
// VM1662:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
//     at <anonymous>:1:34
// (anonymous) @ VM1662:1

document.getElementById('title').getAttribute('id')
// output
'title'

//set 
//Set attribute can over write your original attribute name 

document.getElementById('title').getAttribute('class')
// output
'titleClass'

document.getElementById('title').getAttribute('class', 'test')
// output
'titleClass'

document.getElementById('title').getAttribute('test')
// output
null


const title = document.getElementById('title')


console.log(title)
//output
/* <h1 id=​"title" class=​"titleClass">​All DOM Elements​</h1>​ */


//  Styles Attributes

const head = document.getElementById('title')
undefined

head.style.backgroundColor = 'yellow'
'yellow'

head.style.padding = '20px'
head.style.border = " red solid 5px "
head.style.borderRadius = '10px'


// We can write inside a html through this 

head.innerText   //will only show visible text only
head.textContent    //will show hidden text also         it is the different
head.innerHTML      //  it show including  tags also


// Query selector 

document.querySelector('h2')
/* <h2 id=​"title2">​title two ​</h2>​  */

document.querySelector('#title')
/* <h1 id=​"title" class=​"titleClass">​All DOM Elements​</h1>​  */

document.querySelector('.titleClass')
/* <h1 id=​"title" class=​"titleClass">​All DOM Elements​</h1>​ */

document.querySelector('input[type=”password ”]')

document.querySelectorAll('h1')
// NodeList(3) [h1#title.titleClass, h1#title.titleClass, h1#title.titleClass]
// 0: h1#title.titleClass
// 1: h1#title.titleClass
// 2: h1#title.titleClass
// length: 3


//Apply style with query selector

document.querySelector('ul')
/* <ul id=​"unOrderList">​…​</ul>​<li id=​"list1">​…​</li>​<li id=​"list2">​…​</li>​<li id=​"list3">​…​</li>​<li id=​"list4">​…​</li>​<li id=​"list5">​…​</li>​</ul>​  */

document.querySelector('li')
/* <li id=​"list1">​…​</li>​  */

const myUl = document.querySelector('ul')
undefined

myUl.querySelector('li')
/* <li id=​"list1">​…​</li>​::marker​"red"</li>​   */

const greenul = document.querySelector('li')
undefined
greenul.style.backgroundColor = 'green'
'green'
greenul.style.padding = '10px'

greenul.style.margin = '10px'
'10px'
greenul.innerHTML
'red'
greenul.innerHTML = 'this is green list'
'this is green list'
greenul.style.color = 'red'
'red'

const temList = document.querySelectorAll('li')
undefined

temList
// NodeList(5) [li#list1, li#list2, li#list3, li#list4, li#list5]

temList[0]
/* <li id=​"list1" style=​"color:​ red;​">​…​</li>​   */

temList[0].style.color = 'red' 
'red'


document.getElementsByClassName('cl')
// HTMLCollection(5) [li#list1.cl, li#list2.cl, li#list3.cl, li#list4.cl, li#list5.cl, list1: li#list1.cl, list2: li#list2.cl, list3: li#list3.cl, list4: li#list4.cl, list5: li#list5.cl]

const list1 = document.getElementsByClassName('cl') 
undefined

list1
// HTMLCollection(5) [li#list1.cl, li#list2.cl, li#list3.cl, li#list4.cl, li#list5.cl, list1: li#list1.cl, list2: li#list2.cl, list3: li#list3.cl, list4: li#list4.cl, list5: li#list5.cl]

list1.forEach(function(li){console.log('li')})
error

//manipulate html collection First we should  Covering html collection into node collect 

const myList3 = document.getElementsByClassName('heading')

myList3

myList3.forEach(function(h){
    h.style.color = 'red'
    h.style.backgroundColor = 'black'
    h.style.padding = '10px'
})




