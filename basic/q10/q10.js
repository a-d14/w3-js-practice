const multiply = function() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;

    const product = parseInt(firstNumber) * parseInt(secondNumber);

    document.getElementById('result').textContent = `The result is: \n ${product}`;
}

const divide = function() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;

    const quotient = parseInt(firstNumber) / parseInt(secondNumber);

    document.getElementById('result').textContent = `The result is: ${quotient.toFixed(2)}`;
}