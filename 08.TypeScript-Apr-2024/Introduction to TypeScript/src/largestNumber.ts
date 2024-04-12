function getMaxNumber(a: number, b: number, c: number): string {
  const maxNum = Math.max(a, b, c);
  return `The largest number is ${maxNum}`;
}
console.log(getMaxNumber(16, 3, 5));
console.log(getMaxNumber(-3, -5, -22.5));
