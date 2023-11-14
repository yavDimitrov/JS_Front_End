function getUpperCaseName (name) {
   if(!name) {
    throw new Error();
    //return "";
   }
   
    return name
}

const result = getUpperCaseName("Alex");
console.log(result);
