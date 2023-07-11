"use strickt";

function sameNumbersCheck(number) {
    const digits = Array.from(String(number), Number);
    const isConsistent = new Set(digits).size === 1;

    console.log(digits);
    console.log(isConsistent);

}

sameNumbersCheck(2222222);