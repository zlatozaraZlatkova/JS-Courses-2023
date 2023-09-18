//JavaScript Algorithm: DNA to RNA Conversion
//We write a function that is given a DNA string sequence and converts it into an RNA sequence.

function dnaStrand(dna){
  let sequence = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  return dna.replace(/A|T|G|C/g, function(matched){
    return sequence[matched];
  });
  
}
console.log(dnaStrand("ATTGC"))
