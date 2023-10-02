function encodeAndDecodeMessages() {
    const inputTextEncode = document.querySelectorAll("textarea")[0];
    const inputTextDecode = document.querySelectorAll("textarea")[1];
    
    const btnEncode = document.querySelectorAll("button")[0];
    const btnDecode = document.querySelectorAll("button")[1];
  
    btnEncode.addEventListener("click", encodeMSG);
    btnDecode.addEventListener("click", decodeMSG);
  
    function encodeMSG(event) {
      let encodeMessage = "";
      for (let char of inputTextEncode.value) {
        encodeMessage += String.fromCharCode(char.charCodeAt() + 1);
      }
      inputTextDecode.value = encodeMessage;
      inputTextEncode.value = "";
    }
  
    function decodeMSG(event) {
      let decodeMessage = "";
      for (let char of inputTextDecode.value) {
        decodeMessage += String.fromCharCode(char.charCodeAt() - 1);
      }
      inputTextDecode.value = decodeMessage;
    }
  }
  