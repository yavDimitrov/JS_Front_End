"use strickt";

function sameNumbersCheck(number) {
    const digits = Array.from(String(number), Number);
    const isConsistent = new Set(digits).size === 1;


    console.log(isConsistent);

    if(isConsistent) {
        const sum = digits.reduce(function (accumulator, current) {
            return accumulator + current;
        }, 0);

        console.log(sum);
    }

}

sameNumbersCheck(22212222);