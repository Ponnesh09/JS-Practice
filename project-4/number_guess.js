
let  randomNumber = parseInt(Math.random()* 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let preGuesses = []
let numGuess = 1

let playGame = true

//i get value from input and i convert to int than stored in guess i use guess fo validation and other 
if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess (guess) {

    if (isNaN(guess)){
        alert ("Please enter valid number")

    }else if (guess < 1){
        alert("Enter a number more than 1")

    }else if(guess > 100){
        alert("Enter a number less then 100")

    }else {
        preGuesses.push(guess) // push to empty array

        if (numGuess === 10) {       //check guesses number limit to set if else conditions
            cleanUpGuess(guess)
            displayMessage (`Game Over. Random number was ${randomNumber}`)
            endGame()
            
        } else {
            cleanUpGuess(guess)
            checkGuess(guess) 
        }
    }  
}

function checkGuess (guess) {    // checking random number to match with enter number 
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if (guess > randomNumber){
        displayMessage(`Number is too hight`)
    }
}

function cleanUpGuess (guess) {
    userInput.value = '';                      //empty coz value check through validate
    guessSlot.innerHTML += `${guess}`;          // added guessed number 1 by 1 
    numGuess++;                                 //guessed number count ++
    remaining.innerHTML = `${11 - numGuess}`       // numGuess value  - from 11 it shows remaining value


}

function displayMessage (message) {
    lowOrHi.innerHTML = `${message}`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;

    newGame();

}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random()* 100 + 1);
        preGuesses = [];
        numGuess =1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.replaceChild(p);

        playGame =true;
    });
}

