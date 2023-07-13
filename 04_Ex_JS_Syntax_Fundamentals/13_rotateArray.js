function rotateArray (arr, rotationCount) {
    
    for (let index = 0; index < rotationCount; index++) {
        const firstElement = arr.shift();
        arr.push(firstElement);        
    }

    const newArrString = arr.toString

    console.log(arr.join(" "));
}

rotateArray([32, 21, 61, 1], 4);