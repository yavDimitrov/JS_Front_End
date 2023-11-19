const calculator = {
   multiply: (x, y) => x * y,
   divide: (x, y) => x / y,
   add: (x, y) => x + y,
   subtract: (x, y) => x - y,
};

function calculate(num1 , num2, opperator) {
  const fun = calculator[opperator];
  if(!fun) {
    return 'not valid'; 
  }

  return calculator[opperator](num1, num2);
}
const result = calculate(5,5, "multiply");
console.log(result);