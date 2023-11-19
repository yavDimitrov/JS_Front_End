function calculate(num1 , num2, opperator) {
  if (opperator === "multiply") {
    return num1*num2;
  }

  if(opperator === "divide") {
    return num1 / num2;
  }

  if(opperator === "add") {
    return num1+num2;
  } 

  if(opperator === "subtract") {
    return num1-num2;
  }
}

const result = calculate(5,5, "multiply");
console.log(result);