function cookNumber(number, ...commands) {
    let sum = Number(number);

    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        
        switch(command) {
            case "chop":
                sum = sum /  2;
        }

        console.log(sum);
    }
}


cookNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');