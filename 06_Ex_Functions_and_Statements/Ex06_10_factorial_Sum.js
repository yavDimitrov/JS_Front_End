function calculateFactorial(num) {
  let sum = 1;
  for (let index = 1; index <= num; index ++) {
    sum *= index;
  }
  return sum;
}

function solve(x, y) {
   let sumX = calculateFactorial(x);
   let sumY = calculateFactorial(y);

  return (sumX / sumY).toFixed(2);
}

console.log(solve(5, 2));
