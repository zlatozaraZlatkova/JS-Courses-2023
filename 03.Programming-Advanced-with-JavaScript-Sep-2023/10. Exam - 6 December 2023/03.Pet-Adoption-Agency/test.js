const { expect } = require('chai');
const { petAdoptionAgency }= require('./petAdoptionAgency');


describe('petAdoptionAgency', () => {
  describe('isPetAvailable', () => {
    it('no available count', () => {
      expect(petAdoptionAgency.isPetAvailable('cat', 0, false)).to.equal("Sorry, there are no cat(s) available for adoption at the agency.");
    });

    it('available count, vaccination == true', () => {
      expect(petAdoptionAgency.isPetAvailable('dog', 1, true)).to.equal("Great! We have 1 vaccinated dog(s) available for adoption at the agency.");
    });
    it('available count, vaccination == false', () => {
      expect(petAdoptionAgency.isPetAvailable('dog', 1, false)).to.equal("Great! We have 1 dog(s) available for adoption, but they need vaccination.");
    });

    it("invalid params", () => {
      expect(() => petAdoptionAgency.isPetAvailable("", null, null)).to.throw("Invalid input");
      expect(() => petAdoptionAgency.isPetAvailable(undefined, undefined, undefined)).to.throw("Invalid input");
      expect(() => petAdoptionAgency.isPetAvailable("1", "1", 1)).to.throw("Invalid input");
      expect(() => petAdoptionAgency.isPetAvailable(1, "1", "1")).to.throw("Invalid input");
      expect(() => petAdoptionAgency.isPetAvailable([1], [1], "abc")).to.throw("Invalid input");
      expect(() => petAdoptionAgency.isPetAvailable([1], 1, "abc")).to.throw("Invalid input");
      expect(() => petAdoptionAgency.isPetAvailable(1, {number: 1}, [])).to.throw("Invalid input");
      
    })
  });

  describe('getRecommendedPets', () => {
    it('happy path', () => {
      expect(petAdoptionAgency.getRecommendedPets([{name: "Roxy", traits: "faithful"}, {name: "Blackly", traits: "intelligence"}], "faithful")).to.equal("Recommended pets with the desired traits (faithful): Roxy");
    });

    it('no match with the desired traits', () => {
      expect(petAdoptionAgency.getRecommendedPets([{name: "Roxy", traits: "faithful"}, {name: "Blackly", traits: "intelligence"}], " Good family pet")).to.equal("Sorry, we currently have no recommended pets with the desired traits:  Good family pet.");
    });

    it("invalid params", () => {
      expect(() => petAdoptionAgency.getRecommendedPets(undefined, undefined)).to.throw("Invalid input");
      expect(() => petAdoptionAgency.getRecommendedPets(1, 1)).to.throw("Invalid input");
      expect(() => petAdoptionAgency.getRecommendedPets(["a", "b", "c"], ["abc"])).to.throw("Invalid input");
      
    })
  });

  describe('adoptPet', () => {
    it('happy path', () => {
      expect(petAdoptionAgency.adoptPet("dog", "Dogy")).to.equal("Congratulations, Dogy! You have adopted dog from the agency. Enjoy your time with your new furry friend!");
    });

    it("invalid params", () => {
      expect(() => petAdoptionAgency.adoptPet(undefined, undefined)).to.throw("Invalid input");
      expect(() => petAdoptionAgency.adoptPet(1, 1)).to.throw("Invalid input");
      expect(() => petAdoptionAgency.adoptPet(1, "1")).to.throw("Invalid input");
      expect(() => petAdoptionAgency.adoptPet([1], [1])).to.throw("Invalid input");
      expect(() => petAdoptionAgency.adoptPet([1],"abc")).to.throw("Invalid input");
      expect(() => petAdoptionAgency.adoptPet({number: 1}, [])).to.throw("Invalid input");
      
    })
  });
});