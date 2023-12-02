function solve (num) {
    num = num.toString();

    let average =
    num
    .split('')
    .map(Number)
    .reduce((total, curr) => total +curr, 0) / num.length;

    while (average < 5) {
        num += "9";
        average = num.split("").map(Number).reduce((total, curr) => total + curr, 0) / num.length;
    }

    return num;

}

console.log(solve(101));
console.log(solve(5835));