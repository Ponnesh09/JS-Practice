// mathpi.js

// Object.getOwnPropertyDescriptor(Math)

console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI); //it can not change


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

//output

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const book = {
    title : "Avenger",
    edition : "Comic Book",
    price : 100,
    bookOrder : function (){
        console.log("book sold out");
        
    }

}

// console.log(Object.getOwnPropertyDescriptor(book, "title"));   r,r,r

// console.log(Object.getOwnPropertyDescriptor(book.title)); ❌❌❌❌



Object.defineProperty(book,"title",{
    writable: false,
    enumerable: true,
    configurable: true,
    iterable: false,
    
})

// console.log(Object.getOwnPropertyDescriptor(book, "title"));   false,true,true


for(let[key,value] of Object.entries(book)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
        
    }
}



//object Getter and setter 


const user ={
    _email :"petter@gmail.com",
    _password : "toxin",

    get email(){
        return `${this._email.toUpperCase()}`
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(user);

console.log(tea._email);     //petter@gmail.com
console.log(tea.email);     //PETTER@GMAIL.COM


