/**
 *     3. Extract File
Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension. 
(Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).

 */
function extractFiles(input) {
  let filePath = input.split("\\");

  let file = filePath.pop();

  let lastChar = file.lastIndexOf("."); 

  let name = file.substring(0, lastChar); 
  let extension = file.substring(lastChar + 1) 

  console.log(`File name: ${name}`);
  console.log(`File extension: ${extension}`);
}
//extractFiles("C:\\Internal\\training-internal\\Template.pptx");
extractFiles("C:\\Internal\\training-internal\\Template.bak.pptx");
//extractFiles("C:\\Projects\\Data-Structures\\LinkedList.cs");

