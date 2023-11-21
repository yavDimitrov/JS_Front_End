function solve (x, y, z) {
    function sum(){
        return x + y;
    }
    function substract(x, y) {
        return x - y;
    }

    return substract(sum(x, y), z);
}

console.log(solve(23, 6, 10));