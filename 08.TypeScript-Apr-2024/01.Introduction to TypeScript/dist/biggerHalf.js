function getBiggerHalf(data) {
    let sortedArr = data.sort((a, b) => a - b);
    let sortedArrLength = sortedArr.length;
    let newArr = sortedArr.slice(sortedArrLength / 2, sortedArrLength);
    newArr.sort((a, b) => a - b);
    return newArr;
}
console.log(getBiggerHalf([4, 7, 2, 5]));
console.log(getBiggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log("------");
//Version 2
function getArrBiggerHalf(data) {
    data.sort((a, b) => a - b);
    let newArr = [];
    for (let i = 1; i <= Math.ceil(data.length / 2); i++) {
        newArr.push(data[data.length - i]);
    }
    newArr.sort((a, b) => a - b);
    return newArr;
}
console.log(getArrBiggerHalf([4, 7, 2, 5]));
console.log(getArrBiggerHalf([3, 19, 14, 7, 2, 19, 6]));
