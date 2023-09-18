function fishTank(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let tankVolumeLiter = (l * w * h) / 1000;
    let greenSpace = Number(input[3]) / 100;
    let totalLiter = tankVolumeLiter * (1 - greenSpace);
    console.log(totalLiter);  

}
fishTank(["85", "75", "47", "17"])
