const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd');

describe("Even or Odd", () => {
  it("return undefined with number params", () => {
    expect(isOddOrEven(1)).to.be.undefined;

  });

  it("check for empty input", () => {
    expect(isOddOrEven("")).to.not.equal(null)

  });
  it("check for odd string input", () => {
    expect(isOddOrEven("abc")).to.be.equal("odd")

  });
  it("check for even string input", () => {
    expect(isOddOrEven("abcd")).to.be.equal("even")

  });


})