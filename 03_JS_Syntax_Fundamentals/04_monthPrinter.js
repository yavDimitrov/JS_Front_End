function monthPrinter (num) {
    if (num <1 || num > 12) {
        console.log("Error!");
    } else {
        switch (num) {
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("March");
                break;
            case 4:
                console.log("April");
                break;
        }
    }
}