function solve (...input) {
 let largerstNumber = 0;

 console.log(input)

 for (let index = 0; index < index.lenght ; index++ ) {
    console.log(input[index]);


    if (input[index] > largerstNumber){
        console.log(input[index]);
        largerstNumber = input[index];
    }
 }

 console.log(largerstNumber);
}

solve (4, 1, 2, 6, 10, 9, 7);