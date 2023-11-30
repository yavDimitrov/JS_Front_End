const carWash = {
    soap: (cleanPercentage) => cleanPercentage + 10,
    water: (cleanPercentage) => {
        const increase = cleanPercentage * 0.2;
        return cleanPercentage + increase;
    },
    "vacuum cleaner": (cleanPercentage) => cleanPercentage + cleanPercentage*0.25 ,
    mud: (cleanPercentage) => cleanPercentage - cleanPercentage * 0.1
}


function solve(commands) {

 let cleanPercentage = commands.reduce(function(total, current) {
    return carWash[current](total);
 }, 0);

//
//    for (let index = 0; index < commands.length; index++) {
//        const command = commands[index];
//        cleanPercentage = carWash[command](cleanPercentage);
//        console.log(cleanPercentage);
//    }

    return `The car is ${cleanPercentage.toFixed(2)} clean.`
}

console.log(solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
'water']));