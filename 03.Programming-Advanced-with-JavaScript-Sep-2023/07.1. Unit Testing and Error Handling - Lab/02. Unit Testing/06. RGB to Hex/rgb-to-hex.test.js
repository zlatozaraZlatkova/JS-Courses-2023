const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb-to-hex');

describe(" Convert RGB to HEX Color", () => {

  it ("converts black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000"); 

  });

  it ("converts white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF"); 
  });

  it ("converts blue", () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal("#234465"); 
  });

  if("converts 15,15,15 to #0F0F0F", () => {
    expect(rgbToHexColor(15, 15, 15)).to.equal("#0F0F0F");

  });

  it ("returns undefined for missing params", () => {
    expect(rgbToHexColor(0, 0)).to.equal(undefined); 
    expect(rgbToHexColor(0)).to.be.undefined; 
    expect(rgbToHexColor()).to.equal(undefined); 
  });
  

  it ("return undefined for out lower boundary value", () => {
    expect(rgbToHexColor(-1, 0, -0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;

  });


  it ("return undefined for out upper boundary value", () => {
    expect(rgbToHexColor(256, 255, 255)).to.be.undefined;
    expect(rgbToHexColor(255, 256, 255)).to.be.undefined;
    expect(rgbToHexColor(255, 255, 256)).to.be.undefined;

  });

  it ("return undefined for floating point params ", () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;

  });

  if("return undefined for string params", () => {
    expect(rgbToHexColor("1", 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, "1", 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, "1")).to.be.undefined;
  });


});