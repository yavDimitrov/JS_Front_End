function solve (x, y, z) {
    function sum(){
        return x+y;
    }
    function substract(x ,y) {
        return x-y;
    }

    const sumOfFirstTwo = sum(x,y);
    const result = substract(sumOfFirstTwo,z);

    return result;
}

console.log(solve(23, 6, 10));