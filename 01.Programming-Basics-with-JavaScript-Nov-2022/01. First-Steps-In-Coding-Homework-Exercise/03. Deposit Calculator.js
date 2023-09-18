function depositCalculation(input) {
  let depositAmount = Number(input[0]);
  let depositTime = Number(input[1]);
  let annualInterestRate = Number(input[2]) / 100; 
  let totalAmount =
    depositAmount + depositTime * ((depositAmount * annualInterestRate) / 12);
  console.log(totalAmount);
}
depositCalculation(["2350", "6", "7"]);
