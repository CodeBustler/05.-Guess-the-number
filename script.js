// Random Number Generate
let randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);

function startGame() {
  let userNumber = parseInt(document.getElementById('userInput').value);
  let resultDisplay = document.getElementById('display');

  // Correct Guess
  if (randomNumber === userNumber) {
    resultDisplay.innerHTML = `Congrats, You guessed the right number`;
    resultDisplay.style.backgroundColor = 'green';

    // Guessed Number Is Less
  } else if (randomNumber < userNumber) {
    resultDisplay.innerHTML = `Number is less then ${userNumber}`;
    resultDisplay.style.backgroundColor = 'red';
    // Guessed Number Is Greater
  } else if (randomNumber > userNumber) {
    resultDisplay.innerHTML = `Number is greater then ${userNumber}`;
    resultDisplay.style.backgroundColor = 'red';
  }
}

function reset() {
  window.location.reload();
}
