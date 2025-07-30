let randomNumber = parseInt(Math.random()*100 + 1);
//console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
console.log(lowOrHi);

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; //to write previous guesses
let numGuess = 1; //to store number of chances that a user have
let playGame = true; //allows to play game until the chances are over

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        console.log(guess);
        
    })
}

function validateGuess(guess){ //if the user guess is valid or not
    if(isNaN(guess)){
        alert('Plaese enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number more than 1');
    }else if(guess > 100){
        alert('Please enter a number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){ //low or high
    if(guess === randomNumber){
        displayMessage('You guessed the number right!')
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low!`);
    }else if(guess > randomNumber){
        displayMessage(`Number is too high!`);
    }
}

function displayMessage(message){ // display message for high/low, successfully guessed and for gameover.
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        e.preventDefault();
        lowOrHi.innerHTML = '';
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })
}

