// edit and remove elements in DOM 

console.log("js running");


// function addLangName(lanName){                      //create function and parameter
//     const li = document.createElement('li');        //crete list element and stored to li
//     li.innerHTML = `${lanName}`                     // add innerHTML 
//     document.querySelector('.language').            //select element from class name
//     appendChild(li)                                                 // add from last  
 
// }
// addLangName("python")
// addLangName("cpp")



// this one is optimized way 

// function addlanguage (langName1) {
//     const li = document.createElement('li')
//     const addText = document.createTextNode(langName1)
//   li.appendChild(addText)
    
// }
// addlanguage("python")
// addlanguage("cpp")       no way



function optAddLang(langName2){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName2))
    document.querySelector('.language').appendChild(li)
}
optAddLang ("python")
optAddLang ("cpp")


// edit 

// method 1

const addAnotherList = document.querySelector('li:nth-child(2)')
// console.log(addAnotherList);
// addAnotherList.innerHTML = "mojo"    
const myLi=document.createElement('li')
myLi.textContent = "react"
addAnotherList.replaceWith(myLi)


// const selectLi = document.querySelector('li:nth-child(2)')
// const myLi = document.createElement('li')
// myLi.textContent = "react"
// selectLi.replaceWith(myLi)


//edit

const selectLi = document.querySelector('li:nth-child(2)')
selectLi.outerHTML = '<li>node</li>'


// Removing element

const remLi = document.querySelector('li:last-child')
// remLi.remove()


