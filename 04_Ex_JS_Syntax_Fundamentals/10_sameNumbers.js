"use strickt";

function sameNumbersCheck(number) {
    const digitsString = number.toString();
    let isConsistent = true;
    let sum = Number(digitsString[0]);

    for (let index = 1; index < digitsString.length; index++) {
        sum += Number(digitsString[index]);

        if (digitsString[index] !== digitsString[index-1]) {

            isConsistent = false;
        }
    
        
    }

    console.log(isConsistent);
    console.log(sum);

}

sameNumbersCheck(2222222);