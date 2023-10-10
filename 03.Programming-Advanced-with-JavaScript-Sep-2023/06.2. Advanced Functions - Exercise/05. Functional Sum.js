function add(num) {
  let sum = 0;
  function inner(num2) {
    sum += num2;
    return inner;
  }
  inner.toString = () => {
    return sum;
  };
  return inner(num);
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());


//count down numbers to 1

function countDown(number) {
  console.log(number);
  const newNumber = number - 1;
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);
