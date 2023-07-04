function reverseArray(count, arr) {
    let resultArray = arr.slice(0, count).reverse().join(" ");

    console.log(resultArray);
}

reverseArray(3, [10, 20, 30, 40, 50])