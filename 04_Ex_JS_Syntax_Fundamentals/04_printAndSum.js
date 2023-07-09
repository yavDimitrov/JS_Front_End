function printAndSum(start, end) {
const numbers = [];
let sum =0;

for (let index = start; index <= end; index++) {
    numbers.push(index);
    sum += index;    
}

console.log(numbers.join(" "));
console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);