// template literals

let name = "jon"
let age = 30

// console.log(`My name is ${name} and i am ${age} year old `);

const gameName = new String('ponneshRamaswsamy')
// console.log(gameName[0,6]);

//finding proto

// in browser 
// const gameName = new String('ponnesh')
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('n'));


const newStrings = gameName.substring(0,5);
// console.log(newStrings);

const  anotherNewString = gameName.slice(5, 10);
// console.log(anotherNewString);


const newStringOne = "      petter      "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());


const url = "https://www.youtube.google.com/"

console.log(url.replace('.', '$'));

//it check the value you given it includes on url or not
console.log(url.includes('movie'));




//++++++++++++++++++++++++++++++++++++++   go to browser and study about string method     ++++++++++++++++++++++++