function findHeigestNumber (...input) {
    const heighestNumber = input.sort(function (a,b) {
        return b - a;
    })[0];

    console.log(heighestNumber);

 }



findHeigestNumber (4, 1, 2, 6, 10, 9, 7);