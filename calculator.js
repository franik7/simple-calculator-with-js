//function to add
function add(num1, num2) {
  return num1 + num2;
}

//function to subtract
function subtract(num1, num2) {
  return num1 - num2;
}

//function to multiply
function multiply(num1, num2) {
  return num1 * num2;
}

//function to divide
function divide(num1, num2) {
  return num1 / num2;
}

//function to power
function power(num1, num2) {
  return num1 ** num2;
}

//function to mod(remainder)
function mod(num1, num2) {
  return num1 % num2;
}

//function to sqrt
function sqrt(num1) {
  return Math.sqrt(num1);
}

//function to factorial
function factorial(num1) {
  let factorial = 1
  for(let i = 2; i <= num1; i++){
    factorial = factorial * i
    
  }
  return factorial
}



function calculate(expression) {

const tokens = expression.split(' ')

let num1 
let operator 
let num2 

if(tokens.length === 3){
  num1 = Number(tokens[0])
  operator = tokens[1]
  num2 = Number(tokens[2])
  if(Number.isNaN(num1) || Number.isNaN(num2)){
    alert("Not a number")
    return
  } 
} 
else if (tokens.length === 2) {
  operator = tokens[0]
  num1 = Number(tokens[1])
  if (Number.isNaN(num1)) {
    alert("Not a number")
    return
  } else if (!Number.isInteger(num1) && operator === "!"){
    alert("Needs to be an integer")
    return
  } else if (num1 < 0 && operator === "!"){
    alert("Needs to be a positive number")
    return
  }
} else {
  alert("Invalid expression")
  return
}






//addition
if(operator === '+') {
  return add(num1, num2)
}

//subtraction
if(operator === '-') {
  return subtract(num1, num2)
} 

//multiplication
if(operator === '*') {
  return multiply(num1, num2)
}

//division
if(operator === '/') {
  return divide(num1, num2)
}

//power
if(operator === '^') {
  return power(num1, num2)
}

//modulus 
if(operator === '%') {
  return mod(num1, num2)
}

//sqrt
if(operator === 'sqrt') {
  return sqrt(num1)
}

//factorial
if(operator === '!') {
  return factorial(num1)
}

alert("Unrecognized operator")


}




/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
