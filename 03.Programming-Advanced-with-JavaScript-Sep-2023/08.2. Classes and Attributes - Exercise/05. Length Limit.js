class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = Number(innerLength);
  }
  increase(length) {
    return (this.innerLength = this.innerLength + length);
  }
  decrease(length) {
    if (typeof length !== "number" || this.innerLength - length < 0) {
      return (this.innerLength = 0);
    }

    return (this.innerLength = this.innerLength - length);
  }
  toString() {
    if (this.innerString.length > this.innerLength) {
      return this.innerString.substring(0, this.innerLength) + "...";
    }
    return this.innerString;
  }
}