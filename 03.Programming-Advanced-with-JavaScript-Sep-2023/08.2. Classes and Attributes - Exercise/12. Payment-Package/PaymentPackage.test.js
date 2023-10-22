const { expect } = require("chai");
const { PaymentPackage} = require("./PaymentPackage");

describe("PaymentPackage", () => {
  
  let instance;
  beforeEach(() => {
    instance = new PaymentPackage("test", 1);
  });

  describe("constructor tests", () => {
    it("should init with correct params", () => {
      expect(instance._name).to.be.equal("test");
      expect(instance._value).to.be.equal(1);
      expect(instance._VAT).to.be.equal(20);
      expect(instance._active).to.be.equal(true);
    });

  });

  describe("accessors tests", () => {
    
    describe("accessor name", () => {
      it("should throw error for incorrect value", () => {
        expect(instance = () => new PaymentPackage(undefined, 1)).to.throw(Error);
        expect(instance = () => new PaymentPackage(null, 1)).to.throw(Error);
        expect(instance = () => new PaymentPackage("", 1)).to.throw(Error);
        expect(instance = () => new PaymentPackage(1, 1)).to.throw(Error);
        expect(instance = () => new PaymentPackage([], 1)).to.throw(Error);
      });
      
    });

  })
  

  describe("accessor value", () => {
    it("should 0 value be valid", () => {
      expect(new PaymentPackage("test", 0).value).to.equal(0);
      expect(new PaymentPackage("test", 1).value).to.equal(1);
    });

    it("should throw error for incorrect value", () => {
      expect(instance = () => new PaymentPackage("test", undefined)).to.throw(Error);
      expect(instance = () => new PaymentPackage("test", null)).to.throw(Error);
      expect(instance = () => new PaymentPackage("test", -1)).to.throw(Error);
      expect(instance = () => new PaymentPackage("test", [])).to.throw(Error);
    });
    
  });

  
  describe("accessor VAT", () => {
    it("should throw error for incorrect value", () => {
      expect(() => (new PaymentPackage("test", 1).VAT = "number")).to.throw(Error);
      
    });

    it("should throw error for incorrect value", () => {
      expect(() => (new PaymentPackage("test", 1).VAT = -20)).to.throw(Error);
    });

  });


  describe("accessor active", () => {
    it("should be a boolean value ", () => {
      expect(typeof new PaymentPackage("test", 1).active).to.be.equal("boolean");

    });

    it("should throw error for incorrect value", () => {
      expect(() => new PaymentPackage("test", 1).active = 1).to.throw(Error);
      expect(() => new PaymentPackage("test", 1).active = "string").to.throw(Error);

    });

  });

  describe("function toSting()", () => {
    it("should return valid string message", () => {
      expect(new PaymentPackage("test", 1).toString()).to.be.equal(
        `Package: test\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`);

    });

    it("should return valid string msg for inactive", () => {
      const instance = new PaymentPackage("test", 1);
      instance.active = false;
      expect(instance.toString()).to.be.equal(
        `Package: test (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`);

    });

  });

});