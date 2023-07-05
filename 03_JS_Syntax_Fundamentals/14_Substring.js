function substring(text, startIndex, endIndex) {
    let substring = "";

    for(let index = 0; index < text.length; index++) {
        if (index >= startIndex && index <= endIndex) {
            substring += text[index];
        }
    }

    console.log(substring);
}


substring ('ASentence', 1, 8);

