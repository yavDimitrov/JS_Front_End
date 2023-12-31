function calculateAvg (num){
    return num
    .split('')
    .map(Number)
    .reduce((total, curr) => total +curr, 0) / num.length;
}

function solve (num) {
    num = num.toString();

    let average = calculateAvg(num);

    while (average < 5) {
        num += "9";
        average = calculateAvg(num);
    }

    return num;

}

console.log(solve(101));
console.log(solve(5835));