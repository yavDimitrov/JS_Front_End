function countOccurrences(text, word) {
 const words = text.split(" ");
 let occurences = 0;

 for (let index = 0; index < words.length; index++) {
    if (words[index] === word) {
        occurences ++;
    }
    
 }
 console.log(occurences);


}




countOccurrences ('A small sentence with some small words','small');

