// Example 1

// const newPromise = new Promise(function(resolve, reject){
//     //   console.log("from promise");
      
//     setTimeout(function(){
//         console.log("Async operation done");
//         resolve()
//     },3000)

// })

// newPromise.then(function(){
//     console.log("promise consumed");
    
// })


// Example 2

// new promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async 2");
//         resolve()
//     },1000)
    
// }).then(function(){
//     console.log("promise resolved");
// })                                           XXXXX
  

// Example 3
// How to fetch data basic way

const promise3 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve({userName : "petter", email : "petterparker@gmail.com"})
    },1000)
})

// promise3.then(function(user){
//     console.log(user);
    
// })


// Example 4
// Promise with error statement 

// const promise4 = new Promise((resolve,reject)=>{
   
//     setTimeout(()=>{ 
//         let error = false
//         if (error) {
//             resolve({userName : "petter", password : 2345})
//         }else{
//             reject(`ERROR: Something Error`)
//         }
//     },1000)

// }).then((user)=>{
//     console.log(user);
//     return user.userName;
// }).then((userName)=>{
//     console.log(userName);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected"))

//outputs

// !error , error = false   ==> ERROR: Something Error
//             The promise is either resolved or rejected


// error  ==>      { userName: 'petter', password: 2345 }
//                 petter
//                 The promise is either resolved or rejected



// Example 5
// Create promise five with Async and Await


// const promiseFive = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         let error = true;
//         if (!error) {
//             resolve({ userName: 'jon', password: 6969 })
//         } else {
//             reject(`ERROR something wrong`)
//         }
//     },5000)
// });

// async function aPromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
        
//     }catch(error){
//         console.log(error);
        
//     }
// }                                                         // 99 and 108  new concept

// aPromiseFive()


// Example 6

async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log(error);
        
    }
}

// getAllUser() 



// Example 7


//     setTimeout(()=>{

//      async function getAllUser(){   
//             try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(error);
        
//     }
// }
// getAllUser()

// },5000)
   

// Example 8


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))


// Static methods
