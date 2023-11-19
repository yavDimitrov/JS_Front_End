const calculator = {
   multiply: (x, y) => x * y,
   divide: (x, y) => x / y,
   add: (x, y) => x + y,
   subtract: (x, y) => x - y,
};

const calculate = (num1 , num2, opperator) => calculator[opperator] ? calculator[opperator](num1, num2) : "type error";


const result = calculate(5,5, "multiply");
console.log(result);