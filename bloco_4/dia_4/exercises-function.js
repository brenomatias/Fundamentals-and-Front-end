let string = "Ana";

function validatePalin(word) {  
  word = word.toLowerCase();
  // get the total length of the words  
  let len = word.length;  
  
  for (let i = 0; i < len; i++) {   // iterate through the string

      // validate the first and last characters are same  
      if (word[i] !== word[len - 1 - i]) {  
          return false;  
      }  
  }  
  return true;  
}  

console.log(validatePalin(string));