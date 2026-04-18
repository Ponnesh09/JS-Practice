// Filter   Map   Reduce

// JavaScript provides three essential array methods—map, filter, and reduce—to process and transform data without modifying the original array. 
// These methods are often chained together to perform complex data manipulations in a clean, functional style


// filter(): Creates a new array containing only the elements that satisfy a specific condition.
// Usage: Removing even numbers, finding users over age 18, or selecting words shorter than 5 letters.
// Syntax: array.filter((currentValue) => condition)


// map(): Transforms every element in an array and returns a new array of the same length.
// Usage: Converting an array of numbers to their squares or extracting specific properties from objects.
// Syntax: array.map((currentValue, index) => { ... })


// reduce(): Combines all elements in an array into a single value (such as a sum, an object, or a concatenated string).
// Usage: Summing prices, counting occurrences of characters, or flattening nested arrays.
// Syntax: array.reduce((accumulator, currentValue) => { ... }, initialValue)


//Filter

const myArray = [1,2,3,4,5,6,7,8,9,10]

const number = myArray.filter((num)=> num > 5 )

// console.log(number);               //output [6,7,8,9,10]


const number1 = myArray.filter((num)=>{
    num > 3
})
// console.log(number1);                // output []


const number2 = myArray.filter((num)=>{
   return num > 7
})
// console.log(number2);                 // [8,9,10]



const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = []

myNum.forEach((item)=>{
    if(item > 5){
        newNum.push(item)
    }
})

// console.log(newNum);              //output [6,7,8,9,10]


//set of Data

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Ten', genre: 'Science', publish: 2019, edition: 2025 },
  ];


//   const mybook = books.filter((bk)=> bk.publish >= 2000)
//   console.log(mybook);
  

// const myBook = books.filter((itemBK)=>{
//     return itemBK.genre === 'Non-Fiction'
// }) 
// // console.log(myBook);


const myBook1 = books.filter((bk)=>{
    return bk.genre === "Science" && bk.publish >=2000
})
// console.log(myBook1);




