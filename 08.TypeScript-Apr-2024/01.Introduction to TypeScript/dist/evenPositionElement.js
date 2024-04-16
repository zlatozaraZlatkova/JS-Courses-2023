function getEvenPosition(data) {
    let evenPositions = [];
    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            evenPositions.push(data[i]);
        }
    }
    return evenPositions.join(" ");
}
console.log(getEvenPosition(["20", "30", "40", "50", "60"]));
console.log(getEvenPosition(["5", "10"]));
