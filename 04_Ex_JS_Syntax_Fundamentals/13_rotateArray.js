function rotateArray (arr, rotationCount) {

    // kopie na masiva 
    const myArr=[...arr];
    
    for (let index = 0; index < rotationCount; index++) {
        const firstElement = arr.shift();
        arr.push(firstElement);        
    }

    console.log(arr.join(" "));
    console.log(myArr.join(" "));
}

rotateArray([32, 21, 61, 1], 3);