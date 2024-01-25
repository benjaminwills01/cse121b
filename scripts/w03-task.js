/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */



function add(number1, number2) {

    return number1 + number2;
}

function addNumbers() {

  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);

  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);



/* Function Expression - Subtract Numbers */



const subtract = function(number1, number2) {
  return number1 - number2;
}

const subtractNumbers = function() {

  const subtractNumber1 = Number(document.querySelector('#subtract1').value);
  const subtractNumber2 = Number(document.querySelector('#subtract2').value);

  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */



const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {

  const multiplyNumber1 = Number(document.querySelector('#factor1').value);
  const multiplyNumber2 = Number(document.querySelector('#factor2').value);

  document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */



function divide(dividend, divisor) {

  return dividend / divisor;
}

function divideNumbers() {

  let divideNumber1 = Number(document.querySelector('#dividend').value);
  let divideNumber2 = Number(document.querySelector('#divisor').value);

  document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);



/* Decision Structure */



document.querySelector('#getTotal').addEventListener('click', function () {

  const calculateTotalDue = () => {

    const subtotal = Number(document.querySelector('#subtotal').value);
    const isClubMember = document.querySelector('#member').checked;
    const discount = isClubMember ? 0.2 : 0;
    const totalDue = subtotal - subtotal * discount;

    document.querySelector('#total').textContent = `Total Due: $${totalDue.toFixed(2)}`;
  }

  document.querySelector('#getTotal').addEventListener('click', calculateTotalDue);
})



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */

document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1).join(', ');

/* Output Evens Only Array */

document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
