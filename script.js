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

let letters = [];
let count = 0;
let count2 = 0;
const guessingWords = ["home", "bike", "echo", "milk", "door", "curb", "lamb"];

const randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)];
console.log(randomWord);

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
    }
        
    // if(count == 0) {
    //     squaresOfRowOne[0].innerHTML = letters[0];
        
    // }else if(count == 1) {
    //     squaresOfRowOne[1].innerHTML = letters[1];
        
    // }else if(count == 2) {
    //     squaresOfRowOne[2].innerHTML =letters[2];
       
    // }else if(count == 3){
    //     squaresOfRowOne[3].innerHTML = letters[3]; 
        
    // }
}

const deleteDisplayedLetter = () => {
   if(count == 4) {
    squaresOfRowOne[3].innerHTML = "";
    letters.pop();
    count = count - 1;
    console.log(letters);
   }else if(count == 3) {
    squaresOfRowOne[2].innerHTML = "";
    letters.pop();
    count = count - 1;
    console.log(letters);
   }else if(count == 2) {
    squaresOfRowOne[1].innerHTML = "";
    letters.pop();
    count = count - 1;
    console.log(letters);
   }else if(count == 1) {
    squaresOfRowOne[0].innerHTML = "";
    letters.pop();
    count = count - 1;
    console.log(letters);
   }
}

backspaceBtn.addEventListener("click", () => {
    deleteDisplayedLetter();
    console.log(count);
});

const wordChecker = ()  => {
    
    let randomWord1 = randomWord.split('');
    for(let i = 0; i < letters.length; i++){
        count2 += 1;
        for(let j = 0; j < randomWord.length; j++) {
            if(count2 == 1 && randomWord1.includes(letters[0]) && letters[i] !== randomWord1[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(count2 == 2 && randomWord1.includes(letters[1]) && letters[i] !== randomWord1[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(count2 == 3 && randomWord1.includes(letters[2]) && letters[i] !== randomWord1[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(count2 == 4 && randomWord1.includes(letters[3]) && letters[i] !== randomWord1[i]) {
                squaresOfRowOne[i].style.backgroundColor = 	"#FFAC1C";
            }else if(letters[i] !== randomWord1[i]) {
                squaresOfRowOne[i].style.backgroundColor = "#C8C8C8";
            }else if(letters[i] == randomWord1[i]) {
                squaresOfRowOne[i].style.backgroundColor = "#66FF00";
            }
        }
    }
}

enterButton.addEventListener("click", () => {
    wordChecker(); 
    letters = [];
});

lettersBtn.forEach((letter) => {
    letter.addEventListener("click", () => {
        createWord(letter);
        displayClickedLetter();
        counter();
    });
});

















