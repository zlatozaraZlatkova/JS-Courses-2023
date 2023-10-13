const { expect } = require("chai");
const { lookupChar } = require("./charLookup");

describe("Look up char", () => {
  it("check for correct type of params", () => {
    let string = "abc";
    let index = 2;
    expect(lookupChar(string, index)).to.be.equal("c");
  });

  it("return undefined for incorrect typeof string params", () => {
    let string = 1;
    let index = 1;
    expect(lookupChar(string, index)).to.be.undefined;
  });

  it("return undefined for incorrect typeof input params", () => {
    let string = "abc"
    let index = "def";
    expect(lookupChar(string, index)).to.be.undefined;
  });

  it("return undefined for index param as fraction", () => {
    let string = "abc"
    let index = 1.1;
    expect(lookupChar(string, index)).to.be.undefined;
  });

  it("return not equal to null for empty params", () => {
    let string = null;
    let index = null;
    expect(lookupChar(string)).to.not.equal(null);
    expect(lookupChar(index)).to.not.equal(null);
  });

  it('return undefined with object for first param', () => {
    let string = {};
    let index = 1;
    expect(lookupChar(string, index)).to.be.undefined;
  });
  
  it('return undefined with array for first param', () => {
    let string = [];
    let index = 1;
    expect(lookupChar(string, index)).to.be.undefined;
  });

  it('return undefined with object for index param', () => {
    let string = "abc";
    let index = {};
    expect(lookupChar(string, index)).to.be.undefined;
  });

  it('return undefined with array for index param', () => {
    let string = "abc";
    let index = [];
    expect(lookupChar(string, index)).to.be.undefined;
  });

  it("check if index has the same value as a string length", () => {
    let string = "abc";
    let index = 3;
    expect(lookupChar(string, index)).to.be.equal("Incorrect index");
  });

  it("check if index has the bigger value as a string length", () => {
    let string = "abc";
    let index = 5;
    expect(lookupChar(string, index)).to.be.equal("Incorrect index");
  });

  it("check if index has negative value", () => {
    let string = "abc";
    let index = -1;
    expect(lookupChar(string, index)).to.be.equal("Incorrect index");
  });
});


