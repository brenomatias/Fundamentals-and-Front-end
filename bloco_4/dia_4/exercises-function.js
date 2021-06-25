//Exercício 1
let string = "Ana";
function validatePalin(word) {  
  word = word.toLowerCase();
  let len = word.length;                      // get the total length of the words
  for (let i = 0; i < len; i += 1) {         // iterate through the string 
      if (word[i] !== word[len - 1 - i]) {  //validate the first and last characters are same  
          return false;                    // se for falso já para na primeira iteração
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

//Exercício 4
let testArray4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function longestWord (testArray4) {
let lgth = 0;                                                //Define a largura inicial para comparar com os elementos da array
let longest;                                                //Define a variável que vai receber a maior palavra 
for (let i = 0; i < testArray4.length; i += 1) {           //Inicia o loop para passar entre os elementos da array4
  if (testArray4[i].length > lgth) {                      //Compara a largura dos elementos da array (começando em 0) com a largura inicial
    lgth = testArray4[i].length;                         // se a largura do elemento i da array4 (0,1,2) for maior que a largura inicial = 0, 
    longest = testArray4[i];                            //o elemento largura inicial assume esse valor
  }
}
   return longest;
}
console.log(longestWord(testArray4));   

//Exercício 5
let numbers = [ 4, 2, 5, 8, 2, 3, 3, 3, 3, 3];
function countNumbers (numbers){                              //função para contar a maior frequencia em uma array
    let mf = 1;                                              //frequencia maxima (comparador de frequencia inicial)
    let counter = 0;                                        //contador de frequencia
    let storeNumber;                                       //armazenar o número com máxima frequencia
    for (let i = 0; i < numbers.length; i += 1) {         //pecorre a array e seleciona o elemento atual da array numbers
        for (let j = i; j < numbers.length; j += 1) {    //percorrer os próximos elementos na array numbers para comparar e calcular a frequência do elemento atual
             if(numbers[i] == numbers[j]){              //checa se elemento se repete na array numbers
                 counter += 1;                         //incrementa o contador se se repetir 
             }  else if (mf < counter) {              //compara o contador de frequencia com a frequencia maxima de comparação (mf=1) e se a frequencia atual for maior que 1 (ou seja, repete o numero)
                 mf = counter;                       //se contador maior que frequencia de comparaçao guarda o valor do contador na frequencia maxima para os proximos elementos         
                 storeNumber = numbers[i];          //guarda o atual elemento no numero que desejamos selecionar 
             }
        }
        return storeNumber;
    } 
}

console.log(countNumbers(numbers));

let arr = [2, 3, 2, 5, 8, 2, 3];;
function mostFrequent (arr) {
    let mf = arr[0];
    let maxCount = 0;
    let len = arr.lenght;
    for ( let i = 0; i < len; i += 1){
    let count = 0;
        for(j = i+ 1; j < len; j += 1){
            if(arr[i] == arr[j]){
                count += 1;
            }
        }
        if(maxCount < count){
            maxCount = count;
            mf = arr[i];
        }
    }
        return mf;
}
console.log(mostFrequent(arr));

//Exercício 6
let num = 5;

function somatorio(num) {
    let soma = 0;
    for ( let i = 1; i <= num; i += 1){
     soma += i;
    }
    return soma;
}
console.log(somatorio(num));

let N = 5;
function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
  
console.log(numberSum(N));

//Exercício 7
