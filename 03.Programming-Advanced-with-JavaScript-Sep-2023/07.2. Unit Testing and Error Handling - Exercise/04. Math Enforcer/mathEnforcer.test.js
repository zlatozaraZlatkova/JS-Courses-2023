const { expect, assert } = require("chai");
const { mathEnforcer } = require("./mathEnforcer");

describe("Math Enforcer", () => {
  describe("addFive", () => {
    it("check if it returns undefined with parameters other than a number", () => {
      expect(mathEnforcer.addFive("1")).to.be.undefined;
      expect(mathEnforcer.addFive(null)).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });
  
    it("check if returns correct sum", () => {
      expect(mathEnforcer.addFive(-1)).to.be.equal(4);
      expect(mathEnforcer.addFive(-1.1)).to.be.equal(3.9);
      expect(mathEnforcer.addFive(0)).to.be.equal(5);
      expect(mathEnforcer.addFive(1)).to.be.equal(6);
      expect(mathEnforcer.addFive(1.1)).to.be.equal(6.1); //.to.be.closeTo(6.1, 0.01)
      
    });

  });
  describe("subtractTen", () => {
    it("check if it returns undefined with parameters other than a number", () => {
      expect(mathEnforcer.subtractTen("1")).to.be.undefined;
      expect(mathEnforcer.subtractTen(null)).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

    it("check if returns correct subtract", () => {
      expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
      expect(mathEnforcer.subtractTen(-1.1)).to.be.equal(-11.1);
      expect(mathEnforcer.subtractTen(0)).to.be.equal(-10); 
      expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
      expect(mathEnforcer.subtractTen(1.1)).to.be.equal(-8.9);
      expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
    });
    
  });
  describe("sum", () => {
    it("check if it returns undefined with parameters other than a number", () => {
      expect(mathEnforcer.sum("1", "1")).to.be.undefined;
      expect(mathEnforcer.sum(1, "1")).to.be.undefined;
      expect(mathEnforcer.sum("1", 1)).to.be.undefined;
      expect(mathEnforcer.sum(null, null)).to.be.undefined;
      expect(mathEnforcer.sum(null, "1")).to.be.undefined;
      expect(mathEnforcer.sum(null, 1)).to.be.undefined;
      expect(mathEnforcer.sum("1", null)).to.be.undefined;
      expect(mathEnforcer.sum(1, null)).to.be.undefined;
      expect(mathEnforcer.sum(undefined, undefined)).to.be.undefined;
      expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
      expect(mathEnforcer.sum(undefined, "1")).to.be.undefined;
      expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
      expect(mathEnforcer.sum("1", undefined)).to.be.undefined;
      expect(mathEnforcer.sum([], 1)).to.be.undefined;
      expect(mathEnforcer.sum(1, [])).to.be.undefined;
      expect(mathEnforcer.sum({}, 1)).to.be.undefined;
      expect(mathEnforcer.sum(1,{})).to.be.undefined;
    });

    it("check if returns correct sum of two params", () => {
      expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
      expect(mathEnforcer.sum(-1.1, -1.1)).to.be.equal(-2.2);
      expect(mathEnforcer.sum(0, 1)).to.be.equal(1); 
      expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
      expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.03);
    });
  });

 
});


