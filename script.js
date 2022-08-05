//Each square should output one letter input from clicked buttons
//when enter button is clicked JS should check wordToGuess against guessedWord
//if letter is in the word and in the correct place, the square should turn green
//if letter is in the word but in wrong place, the square should turn yellow
//if letter is not in the word, the square should turn grey
//once word is guessed next TR should activate for next word to guess
//if word is guessed the game stops and should have a button to restart game, and generate new word to guess
// input buttons should turn color accoringly to guessed letters

//when letter is clicked each innertext of each button should get saved in a variable.
//Each square should output one letter input from clicked buttons.
// should be able to click on button and output a seperate letter for each square
// create var to store several words to guess from
// generate a random word from guessingWords array to use for guessing
// check to see if randomWord and created guessed word match by using enter button
// check if letters match between guessed word and random word
//if all letters match then squares turn green


const lettersBtn = document.querySelectorAll(".letter");
const squaresOfRowOne = document.querySelectorAll(".square");
const squareOne = document.querySelector(".one");
const squareTwo = document.querySelector(".two");
const squareThree = document.querySelector(".three");
const squareFour = document.querySelector(".four");
const enterButton = document.querySelector(".enter");

let letters = [];

const createWord = (letter) => {
    letter = letter.innerHTML;
    letters.push(letter.toLowerCase());  
}

const counter = () => {
    count = count + 1;
}

const displayClickedLetter = () => {
    
    if(count == 0) {
        squaresOfRowOne[0].innerHTML = letters[0];
        
    }else if(count == 1) {
        squaresOfRowOne[1].innerHTML = letters[1];
        
    }else if(count == 2) {
        squaresOfRowOne[2].innerHTML =letters[2];
       
    }else if(count == 3){
        squaresOfRowOne[3].innerHTML = letters[3]; 
        
    }
}

lettersBtn.forEach((letter) => {
    letter.addEventListener("click", () => {
        createWord(letter);
        displayClickedLetter();
        counter();
    });
});

















