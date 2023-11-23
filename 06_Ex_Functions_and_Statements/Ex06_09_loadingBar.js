function printLoadingBar(percentage) {
    let bar = "";
    for(let index = 1; index <= 100; index += 10) {
        if(index < percentage) {
            bar += "%";
        } else {
            bar += "."
        }
    }

    console.log(bar);
}

printLoadingBar(30);
