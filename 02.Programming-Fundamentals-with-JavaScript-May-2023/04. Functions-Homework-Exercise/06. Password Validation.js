function solve(password) {
  let passwordLength = password.length;
  let digitsCounter = 0;

  // • The length should be 6 - 10 characters (inclusive)

  function isValidLength(inputPassword) {
    return passwordLength >= 6 && passwordLength <= 10;
  }

  // • It should consist only of letters and digits
  function isValidSymbols(inputPassword) {
    for (let currentCharIndex of inputPassword) {
      let currentChar = currentCharIndex.charCodeAt(0);
      if (
        !(currentChar >= 48 && currentChar <= 57) &&
        !(currentChar >= 65 && currentChar <= 90) &&
        !(currentChar >= 97 && currentChar <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  //It should have at least 2 digits
  function isValidDigits(inputPassword) {
    for (let i = 0; i < passwordLength; i++) {
      let charNum = password[i].charCodeAt(0);
      if (charNum >= 48 && charNum <= 57) {
        digitsCounter++;
      }
    }
    return digitsCounter >= 2 ? true : false;
  }

  let isLengthValid = isValidLength(password);
  let isLetterAndDigitsOnly = isValidSymbols(password);
  let isContainAtLeastTwoDigits = isValidDigits(password);

  let print = printResult(
    isLengthValid,
    isLetterAndDigitsOnly,
    isContainAtLeastTwoDigits
  );

  function printResult(isValidLength, isValidSymbols, isValidDigits) {
    if (!isValidLength) {
      console.log(`Password must be between 6 and 10 characters`);
    }
    if (!isValidSymbols) {
      console.log(`Password must consist only of letters and digits`);
    }
    if (!isValidDigits) {
      console.log(`Password must have at least 2 digits`);
    }
    if (isValidLength && isValidSymbols && isValidDigits) {
      console.log(`Password is valid`);
    }
  }
}

solve("LogIn12");
solve("LogInhh%12");
solve("Pa$s$s");
