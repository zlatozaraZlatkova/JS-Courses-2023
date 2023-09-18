

//VERSION 3 FUNDAMENTALS with Method .includes() 

function solve(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let currentWord = arr1[i];
    if(arr2.includes(currentWord)) {
      console.log(currentWord);
    }
  }

}
solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);


// VERSION 2 FOR-OF with method .includes()

function solveWithForOF(arr1, arr2) {

  for (let element of arr1) {
    if (arr2.includes(element)) {
      console.log(element)
    }

  }
}
solveWithForOF(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);



// VERSION 1 - BASIC

function commonElements(arr1, arr2) {
  let firstArr = arr1;
  let secondArr = arr2;

  let firstArrL = firstArr.length;
  let secondArrL = secondArr.length;

  
  for (let i = 0; i < firstArrL; i++) {
    let commonElementArr1 = firstArr[i];

    for (let i = 0; i < secondArrL; i++) {
      let commonElementArr2 = secondArr[i];

      if (commonElementArr1 === commonElementArr2) {
        console.log(commonElementArr1)
      }
      
    }
  }
}


commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);


