"use strict";
function printAndSum(a, b) {
    let numArr = [];
    for (let i = a; i <= b; i++) {
        numArr.push(i);
    }
    return `${getPrint(numArr)}\nSum: ${getSum(numArr)}`;
}
function getSum(arr) {
    const sum = arr.reduce((acc, value) => acc + value, 0);
    return sum;
}
function getPrint(arr) {
    const arrStr = arr.join(" ");
    return `${arrStr}`;
}
console.log(printAndSum(5, 10));
console.log("---------");
console.log(printAndSum(0, 26));
console.log("---------");
console.log(printAndSum(50, 60));
