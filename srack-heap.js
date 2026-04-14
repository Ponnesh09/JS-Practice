// stack and heap 
// stack (primitive) heap (non-primitive)

//Stack = copy we’ll change the copy one (myYoutubename)          	 
// heap  =  it give reference u will edit the value it apply in original too  


// stack 
let mainChar = "sonGoku"
let oG = mainChar
// console.log(oG);
oG = "kakarato";

// console.log(mainChar);
// console.log(oG);


//heap

let objOne = {
    email : "before@gmial.com",
    number : 12345
}
console.log(objOne.email , " from og object one ");


// i tack reference from object one 
let objTwo = objOne

console.log(objOne.email , " after reference taken ");
console.log(objTwo.email , " after reference taken ");


objTwo.email = "after@gmail.com"
console.log(objOne.email , " after edit ");
console.log(objTwo.email , " after edit ");


