"use strickt";

function sameNumbersCheck(number) {
    const digits = Array.from(String(number), Number);
    const isConsistent = new Set(digits).size === 1;


    console.log(isConsistent);

    if(isConsistent) {
        const sum = digits.reduce((accumulator, current) => accumulator + current, 0);

        console.log(sum);
    }

}

sameNumbersCheck(2222222);