function censoredWords(text, word) {
    const censorshipWord = "*".repeat(word.length);
    let censoredText = text;

    while (censoredText.includes(word)) {
    censoredText = censoredText.replace(word, censorshipWord);
}

    console.log(censoredText);
}




censoredWords ('A small sentence with some small words','small');

