function addToInput(value) {
    const input = document.getElementById('inputCalc');
    input.value += value;
}

function calculate() {
    
    const input = document.getElementById('inputCalc');
    try {
        const result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = 'Erro';
    }
}

function calculateSquare() {
    const input = document.getElementById('inputCalc');
    try {
        const squareValue = eval(input.value);
        const result = Math.pow(squareValue, 2);
        input.value = result;
    } catch (error) {
        input.value = 'Erro';
    }
}

function calculateRoot() {
    const input = document.getElementById('inputCalc');
    try {
        const inputValue = eval(input.value);
        const result = Math.sqrt(inputValue)
        input.value = result;
    } catch (error) {
        input.value = 'Erro';
    }
}

function clearInput() {
    const input = document.getElementById('inputCalc')
    input.value = '';
}