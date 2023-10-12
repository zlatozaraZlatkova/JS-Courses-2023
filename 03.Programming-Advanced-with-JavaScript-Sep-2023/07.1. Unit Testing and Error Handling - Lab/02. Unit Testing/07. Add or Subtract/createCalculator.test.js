/**
 *  • Return a module (object), containing the functions add(), subtract() and get() as properties.
    • Keep an internal sum that can’t be modified from the outside. <= Closure
    • The functions add() and subtract() take a parameter that can be parsed 
      as a number (either a number or a string containing a number) that is added or subtracted from the internal sum.
    • The function get() returns the value of the internal sum.
 */
    const { expect, assert } = require("chai");
    const { createCalculator } = require("./createCalculator.js");

    describe("Calculator", () => {

      let calc = null;

      beforeEach(() => {
        calc = createCalculator();
      });
    
      it("function get returns zero initial value", () => {
        expect(calc.get()).to.equal(0);
      });
    
      it("function add parsed number param as a number", () => {
        calc.add(1);
        calc.add(1);
        expect(calc.get()).to.equal(2);
      });
    
      it("function add parsed string param as a number", () => {
        calc.add("1");
        calc.add("1");
        expect(calc.get()).to.be.equal(2);
      });
    
      it("function add returns NaN for literal string", () => {
        calc.add("abc");
        calc.add("def");
        expect(calc.get()).to.be.NaN;
      });
    
      it("check functions for empty input", () => {
        calc.add("");
        calc.subtract("");
        calc.get("");
    
        expect(calc.add()).to.not.equal(null);
        expect(calc.subtract()).to.not.equal(null);
        expect(calc.get()).to.not.equal(null);
      });
    
      it("function subtract parsed number param as a number", () => {
        calc.subtract(2);
        calc.subtract(1);
        expect(calc.get()).to.be.equal(-3);
      });
    
      it("function subtract parsed string param as a number", () => {
        calc.subtract("2");
        calc.subtract("1");
        expect(calc.get()).to.be.equal(-3);
      });
    
      it("check both functions (add/subtract) with strings", () => {
        calc.add("abc");
        calc.subtract("def");
        expect(calc.get()).to.be.NaN;
      });
    
      it("check add function with fractions", () => {
        calc.add(1.1);
        calc.add(1.1);
        expect(calc.get()).to.be.equal(2.2)
      })
    
      it("check subtract function with fractions", () => {
        calc.subtract(2.1);
        calc.subtract(1.1);
        expect(calc.get()).to.be.equal(-3.2)
      })
    });