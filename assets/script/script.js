function addToInput(value) {
    const input = document.getElementById('inputCalc');
    input.value += value;
}

function calculate() {
    const input = document.getElementById('inputCalc');
    try {
        const result = new Function('return ' + input.value)();
        input.value = result;
    } catch (error) {
        input.value = 'Erro';
    }
}

function calculateSquare() {
    const input = document.getElementById('inputCalc');
    try {
        const squareValue = new Function('return ' + input.value)();
        const result = Math.pow(squareValue, 2);
        input.value = result;
    } catch (error) {
        input.value = 'Erro';
    }
}

function calculateRoot() {
    const input = document.getElementById('inputCalc');
    try {
        const inputValue = new Function('return ' + input.value)();
        const result = Math.sqrt(inputValue);
        input.value = result;
    } catch (error) {
        input.value = 'Erro';
    }
}

function clearInput() {
    const input = document.getElementById('inputCalc')
    input.value = '';
}

const charToOperation = {
  42: "*",
  43: "+",
  45: "-",
  47: "/",
};

const isNum = (charCode) => {
  return charCode > 47 && charCode < 58;
};

const isDot = (charCode) => {
  return charCode === 46;
};

const isCalculate = (charCode) => {
  return charCode === 13;
};

window.addEventListener("keypress", function (event) {
  var charCode = event.which ? event.which : event.keyCode;

  event.preventDefault();
  if (isNum(charCode)) {
    addToInput(parseInt(event.key, 10));
  }

  if (isDot(charCode)) {
    addToInput(".");
  }

  if (charToOperation[charCode]) {
    addToInput(charToOperation[charCode]);
  }

  if (isCalculate(charCode)) {
    calculate();
  }
});