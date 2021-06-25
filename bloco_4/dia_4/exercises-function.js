let string = "Ana";

function validatePalin(word) {  
  word = word.toLowerCase();
  let len = word.length;   // get the total length of the words
  
  for (let i = 0; i < len; i += 1) {   // iterate through the string 
      if (word[i] !== word[len - 1 - i]) {  //validate the first and last characters are same  
          return false;   // se for falso já para na primeira iteração
      }  
  }  
  return true;  
}  
console.log(validatePalin(string));


 
let testArray = [200, 3, 6, 70, 10, 1];  

function maxInarray(testArray) {
   
    let max = testArray[0];  // Initialize maximum element
  
    for (let i = 0; i < testArray.length; i += 1) { // Traverse array elements and compare
        if (testArray[i] > max) {                 // every element with current max 
            max = testArray[i];
    }
}
return max;
  
}

console.log(maxInarray(testArray));

