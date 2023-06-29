function findHeigestNumber (...input) {
    const sortedInput = input.sort(function (a,b) {
        return b - a;
    })

    console.log(sortedInput);
 }



findHeigestNumber (4, 1, 2, 6, 10, 9, 7);