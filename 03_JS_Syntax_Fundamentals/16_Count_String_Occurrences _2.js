function countOccurrences(text, word) {
 const occurences = text.split(" ").filter(function (element) {
    return element === word;
 }).length;


 console.log(occurences);

}




countOccurrences ('A small sentence with some small words','small');

