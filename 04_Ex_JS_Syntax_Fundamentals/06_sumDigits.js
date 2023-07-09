function sumDigits(number) {
    const digitsString = number.toString();
    let sum = 0;

    for (let index = 0; index < digitsString.length; index++) {
        //digitalsString[index] -> string

        sum += Number(digitsString[index]);
    }

    console.log(sum);

} 

sumDigits(97561);