function isValid(index, arr) {
    if(Number.isInteger(index) && index >= 0 && index < arr.length){
        return true;
    } else {
        return false;
    }
}

function isValid(index, arr) {
    return Number.isInteger(index) && index >=0 && index<arr.length;
}
