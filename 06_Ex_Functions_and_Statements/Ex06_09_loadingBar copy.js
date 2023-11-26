function printLoadingBar(percentage) {

    const percentigeNumber = percentage / 10;
    const bar = "%".repeat(percentigeNumber) + ".".repeat(10-percentigeNumber);

    if(percentage === 100) {
        console.log("100% Complete!");
        console.log(`${bar}`);
    } else {
        console.log(`${percentage} ${bar}`);
        console.log("Still loading...");
    }

}

printLoadingBar(50);
