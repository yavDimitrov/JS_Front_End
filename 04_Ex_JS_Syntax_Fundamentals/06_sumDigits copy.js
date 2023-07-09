function sumDigits(number) {
    const digitsString = number.toString();
    let sum = 0;
    let num = number;

    while(num / 10 >0) {
        sum += num%10; 
        num = Math.floor(num/10);
    }

    console.log(sum);

} 

sumDigits(97561);