//Exercício 1
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

//Exercício 2
let testArray = [2, 3, 100, 70, 10, 1];  
function maxInArray(testArray) {                      //valor máximo em uma array
    let max = testArray[0];                          // Initialize maximum element
    for (let i = 1; i < testArray.length; i += 1) { // Traverse array elements and compare from [1]
        if (testArray[i] > max) {                  // every element with current max 
            max = testArray[i];
    }
}
return max;  
}
console.log(maxInArray(testArray));

//Exercício 2.1
function indexMaxInArray(testArray) {                        //valor do indice do valor máximo em uma array
    let indexOfMax = 0;                                     // Initialize maximum element
    for (let i = 1; i < testArray.length; i += 1) {        // Traverse array elements and 
        if (testArray[i] > testArray[indexOfMax]) {       // compare every element in testArray with current max 
            indexOfMax = i;                              // estabelece um maximo entre os elementos [0] e [1] e define o max para comparar com o resto do loop no array
    }
}
return indexOfMax;
  
}
console.log(indexMaxInArray(testArray));



//Exercício 3
let testArray2 = [2, 4, 6, 7, -10, 0, -3]; 
function indexOfSmallest(testArray2) {
    let indexOfSmallest = 0;
    for (let i = 1; i < testArray2.length; i += 1) {
     if (testArray2[i] < testArray2[indexOfSmallest]) {
        indexOfSmallest = i;
    }
 }
    return indexOfSmallest;
   }

   console.log(indexOfSmallest(testArray2));