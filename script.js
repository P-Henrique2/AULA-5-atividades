let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return;
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (currentNumber === '' || previousNumber === '') return;

    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = '';
    document.getElementById('display').value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    document.getElementById('display').value = '';
}
