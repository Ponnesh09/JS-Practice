
let search = document.getElementById("search");
let result = document.getElementById("result");


// function debounce (fn, delay){
//     let timer

//     return function(...args){
//         //clear existing timer
//         clearTimeout(timer)

//         //add timer 
//         timer = setTimeout(()=>{
//             fn.apply(this,args)
//         },delay) 
//     }
// }

// const debouncingSearch = debounce((query)=>{

//     console.log("searching query" + query);
//     fetchSearchResults(query)

// },300)

// search.addEventListener("input", (e)=>{
//     debouncingSearch(e.target.value)
// })

