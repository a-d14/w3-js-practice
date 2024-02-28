const selectedNumber = Math.floor(Math.random() * 10) + 1;

console.log(selectedNumber);

const result = document.getElementById('result');

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);

    if(selectedNumber !== userGuess) {
        result.textContent = 'Incorrect guess';
    } else {
        result.textContent = 'Congratulations! You guessed correctly.'
    }

}
