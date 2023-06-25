function sum(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        console.log("wrong input type")
    } else {
        console.log(num1 + num2);
    }
}

sum(1, 2);