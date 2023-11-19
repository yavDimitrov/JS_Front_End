const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;


function calculate(num1 , num2, opperator) {
  if (opperator === "multiply") {
    return multiply(num1, num2);
  }

  if(opperator === "divide") {
    return divide(num1, num2);
  }

  if(opperator === "add") {
    return add(num1, num2);
  } 

  if(opperator === "subtract") {
    return subtract(num1,);
  }
}

const result = calculate(5,5, "multiply");
console.log(result);