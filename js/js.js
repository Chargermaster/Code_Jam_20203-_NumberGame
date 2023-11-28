//Setting up game

let numberToGuess = Math.random() * 100 + 1;
numberToGuess = Math.floor(numberToGuess);
console.log(numberToGuess);
let guessChances = 0;
let playedAGame = false;
let gameOver = false;

//Finding elements in HTML

let numberInput = document.getElementById("numberInput");
const numberInputButton = document.getElementById("guessButton");
const gameStateDiv = document.getElementById("numberGameStateDiv");
const childAttacher = document.getElementById("childAttachment");

//Pre-game element creation and attachement

const olElement = document.createElement("ol");
childAttacher.appendChild(olElement);
const stateInformation = document.createElement("p");
stateInformation.style.fontSize = "1.5rem";
stateInformation.setAttribute("id", "WrongGuess");

//Game logic

function guessChecker() {
  if (guessChances < 5 && gameOver === false) {
    //Checks if the game has been played once or more
    if (playedAGame === true) {
      gameStateDiv.removeChild(document.getElementById("WrongGuess"));
    }
    //Adds hint if number is too high
    if (numberInput.value > numberToGuess) {
      stateInformation.textContent = `Your guess ${numberInput.value} is too high, try again.`;
      gameStateDiv.appendChild(stateInformation);
      const previousGuesses = document.createElement("li");
      previousGuesses.textContent = `${numberInput.value} (too high)`;
      olElement.appendChild(previousGuesses);
    }
    //adds hint if number is too low
    else {
      stateInformation.textContent = `Your guess ${numberInput.value} is too low, try again.`;
      gameStateDiv.appendChild(stateInformation);
      const previousGuesses = document.createElement("li");
      previousGuesses.textContent = `${numberInput.value} (too low)`;
      olElement.appendChild(previousGuesses);
      console.log("lower than number to guess");
    }
    playedAGame = true;
    guessChances++;
  }
  //win logic
  else if (numberInput.value == numberToGuess && gameOver === false) {
    stateInformation.textContent = `Your guess ${numberInput.value} was correct, you win!`;
    gameStateDiv.appendChild(stateInformation);
    console.log("You win");
    gameOver = true;
  }
  //lose logic
  if (guessChances === 5 && gameOver === false) {
    stateInformation.textContent = `Too many wrong guesses, you lose!`;
    gameStateDiv.appendChild(stateInformation);
    console.log("You lose");
    gameOver = true;
  }
}

numberInputButton.addEventListener("click", guessChecker);
