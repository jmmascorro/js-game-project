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
const squaresOfRowOne = document.querySelectorAll(".row_one");
const squaresOfRowTwo = document.querySelectorAll(".row_two");
const squaresOfRowThree = document.querySelectorAll(".row_three");
const squaresOfRowFour = document.querySelectorAll(".row_four");
const enterButton = document.querySelector(".enter");
const backspaceBtn = document.querySelector(".backspace");
const winner = document.querySelector(".p_winner");
const newGameBtn = document.querySelector(".new_game");

let letters = [];
let count = 0;
let count2 = 0;
let count3 = 0;
const guessingWords = ["home", "bike", "echo", "milk", "door", "curb", "lamb"];

let randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)];
console.log(randomWord);

newGameBtn.addEventListener("click", () => {
    randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)];
    console.log(randomWord);
    letters = [];
    count = 0;
    count2 = 0;
    count3 = 0;
    console.log(letters);
    console.log(count);
});

const createWord = (letter) => {
    letter = letter.innerHTML;
    letters.push(letter.toLowerCase());  
}

const counter = () => {
    count += 1;
}

const displayClickedLetter = () => {
    switch(count) {
        case 0: 
            squaresOfRowOne[0].innerHTML = letters[0];
            break;
        case 1:
            squaresOfRowOne[1].innerHTML = letters[1];
            break;
        case 2:
            squaresOfRowOne[2].innerHTML =letters[2];
            break;
        case 3:
            squaresOfRowOne[3].innerHTML = letters[3]; 
            break;
        case 4:
            squaresOfRowTwo[0].innerHTML = letters[0];
            break;
        case 5:
            squaresOfRowTwo[1].innerHTML = letters[1];
            break;
        case 6:
            squaresOfRowTwo[2].innerHTML = letters[2];
            break;
        case 7:
            squaresOfRowTwo[3].innerHTML = letters[3];
            break; 
        case 8:
            squaresOfRowThree[0].innerHTML = letters[0];
            break;
        case 9:
            squaresOfRowThree[1].innerHTML = letters[1];
            break;
        case 10:
            squaresOfRowThree[2].innerHTML = letters[2];
            break;
        case 11:
            squaresOfRowThree[3].innerHTML = letters[3];
            break; 
        case 12:
            squaresOfRowFour[0].innerHTML = letters[0];
            break;
        case 13:
            squaresOfRowFour[1].innerHTML = letters[1];
            break;
        case 14:
            squaresOfRowFour[2].innerHTML = letters[2];
            break;
        case 15:
            squaresOfRowFour[3].innerHTML = letters[3];
            break;
    }
}

const deleteDisplayedLetter = () => {
    switch(count) {
        case 1:
            squaresOfRowOne[0].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 2:
            squaresOfRowOne[1].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 3:
            squaresOfRowOne[2].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 4:
            squaresOfRowOne[3].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 5:
            squaresOfRowTwo[0].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 6:
            squaresOfRowTwo[1].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 7:
            squaresOfRowTwo[2].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 8:
            squaresOfRowTwo[3].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 9:
            squaresOfRowThree[0].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 10:
            squaresOfRowThree[1].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 11:
            squaresOfRowThree[2].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 12:
            squaresOfRowThree[3].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break;
        case 13:
            squaresOfRowFour[0].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break; 
        case 14:
            squaresOfRowFour[1].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break; 
        case 15:
            squaresOfRowFour[2].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break; 
        case 16:
            squaresOfRowFour[3].innerHTML = "";
            letters.pop();
            count -= 1;
            console.log(letters);
            break; 
    }
}

backspaceBtn.addEventListener("click", () => {
    deleteDisplayedLetter();
    console.log(count);
});

const wordChecker = ()  => { 
    if(count3 == 0) {
    let guessedWord = letters.toString().replaceAll(',','').toLowerCase();
    for(let i = 0; i < guessedWord.length; i++){
        count2 += 1;
        for(let j = 0; j < randomWord.length; j++) { 
            if(count2 == 1 && randomWord.includes(guessedWord[0]) && guessedWord[i] !== randomWord[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(count2 == 2 && randomWord.includes(guessedWord[1]) && guessedWord[i] !== randomWord[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(count2 == 3 && randomWord.includes(guessedWord[2]) && guessedWord[i] !== randomWord[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(count2 == 4 && randomWord.includes(guessedWord[3]) && guessedWord[i] !== randomWord[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(guessedWord[i] !== randomWord[i]) {
                squaresOfRowOne[i].style.backgroundColor = "#C8C8C8";
            }else if(guessedWord[i] == randomWord[i]) {
                squaresOfRowOne[i].style.backgroundColor = "#66FF00";   
            }
            }
        }
    }else if(count3 == 1) {
        let guessedWord = letters.toString().replaceAll(',','').toLowerCase();
        for(let i = 0; i < guessedWord.length; i++){
            count2 += 1;
            for(let j = 0; j < randomWord.length; j++) { 
                if(count2 == 1 && randomWord.includes(guessedWord[0]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowTwo[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 2 && randomWord.includes(guessedWord[1]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowTwo[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 3 && randomWord.includes(guessedWord[2]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowTwo[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 4 && randomWord.includes(guessedWord[3]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowTwo[i].style.backgroundColor = 	"#FFAC1C";
                }else if(guessedWord[i] !== randomWord[i]) {
                    squaresOfRowTwo[i].style.backgroundColor = "#C8C8C8";
                }else if(guessedWord[i] == randomWord[i]) {
                    squaresOfRowTwo[i].style.backgroundColor = "#66FF00";   
                }
                }
            }  
    }else if(count3 == 2) {
        let guessedWord = letters.toString().replaceAll(',','').toLowerCase();
        for(let i = 0; i < guessedWord.length; i++){
            count2 += 1;
            for(let j = 0; j < randomWord.length; j++) { 
                if(count2 == 1 && randomWord.includes(guessedWord[0]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowThree[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 2 && randomWord.includes(guessedWord[1]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowThree[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 3 && randomWord.includes(guessedWord[2]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowThree[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 4 && randomWord.includes(guessedWord[3]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowThree[i].style.backgroundColor = 	"#FFAC1C";
                }else if(guessedWord[i] !== randomWord[i]) {
                    squaresOfRowThree[i].style.backgroundColor = "#C8C8C8";
                }else if(guessedWord[i] == randomWord[i]) {
                    squaresOfRowThree[i].style.backgroundColor = "#66FF00";   
                }
            }
        }
    }else if(count3 == 3) {
        let guessedWord = letters.toString().replaceAll(',','').toLowerCase();
        for(let i = 0; i < guessedWord.length; i++){
            count2 += 1;
            for(let j = 0; j < randomWord.length; j++) { 
                if(count2 == 1 && randomWord.includes(guessedWord[0]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowFour[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 2 && randomWord.includes(guessedWord[1]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowFour[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 3 && randomWord.includes(guessedWord[2]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowFour[i].style.backgroundColor = 	"#FFAC1C";
                }else if(count2 == 4 && randomWord.includes(guessedWord[3]) && guessedWord[i] !== randomWord[i]) {
                    squaresOfRowFour[i].style.backgroundColor = 	"#FFAC1C";
                }else if(guessedWord[i] !== randomWord[i]) {
                    squaresOfRowFour[i].style.backgroundColor = "#C8C8C8";
                }else if(guessedWord[i] == randomWord[i]) {
                    squaresOfRowFour[i].style.backgroundColor = "#66FF00";   
                }
            }
        }
    }
}

const winnerChecker = () => {
    let guessedWord = letters.toString().replaceAll(',','').toLowerCase();
    console.log(guessedWord);
    if(guessedWord == randomWord) {
        winner.innerHTML = "You Win!";
    }
    
}

enterButton.addEventListener("click", () => {
    wordChecker();
    winnerChecker();
    letters = [];
    count3 += 1;
    count2 = 0;
});

lettersBtn.forEach((letter) => {
    letter.addEventListener("click", () => {
        createWord(letter);
        displayClickedLetter();
        counter();
    });
});

















