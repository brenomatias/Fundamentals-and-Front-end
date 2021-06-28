//1 - Crie uma função usando o operador &&
function compareTrue (statement1, statement2){
    let resultado;
    if (statement1 == true && statement2 == true){
       resultado = true;
    } else {
        resultado = false;
    } 
    return resultado;
}
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

//2 - Crie uma função que calcule a área de um triângulo
function calcArea (base, height){
    let area = (base * height)/2;
    return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

//3 - Crie uma função que divida a frase
function spliteSentence(setence){
    let returnArray = setence.split(" ");              //Split a string into an array of substrings * note que se nao tive espaço em " " vai retonar a separação por letra
    for(let i = 0; i < returnArray.length; i += 1){   //returnArray é array que retorna a substring que vieram da string principal (propriedade ),                                          //o valor da lenght de array agora será 3 porque sao tres substrings
        return returnArray;                         
        }
    } 
console.log(spliteSentence("go trybe"));
console.log(spliteSentence("vamo que vamo"));
console.log(spliteSentence("foguete"));

//4 - Crie uma função que use concatenação de strings
function concatName (parametro) {
    let firstItem = parametro[0];
    let lasItem = parametro[parametro.length - 1];
    let firstAndLast = [];
    for (let i = 0; i < parametro.length; i += 1){
        firstAndLast = lasItem + ", " + firstItem
    } return firstAndLast;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

//5 - Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints (wins, ties){
    let pointsWin = 3;
    let pointsTie = 1;
    let total = wins*pointsWin + ties*pointsTie;
    return total;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

//6 - Crie uma função que calcule a repetição do maior número
function highestCount(array) {
    let counter = 0;                                              //definição do contador de repetição do maior número
    let highestNumber = 0;                                        //definição da variável que vai receber o maior número da array
    let frequencia;                                     //define a frequencia de comparação inicial 
for (let i=0; i <array.length; i += 1) {                         //seleciona o atual elemento da array
        for (let j=i; j<array.length; j += 1){                 //faz o loop atraves dos proximos elementos na array  
                if (array[i] == array[j]){                    //ver se o elemento ocorre de novo na array 
                counter += 1;                                //incrementar o contador se sim 
            } else if (array[highestNumber] > array[i])  {   //compara a frequencia do elemento atual com a frequencia de comparaçao compare current items frequency with maximum frequency
                  frequencia = counter;          //if frequencia de comparaçao é menor (se repete) a frequencia de comparaçao  store m in mf for upcoming elements           
                }
        }  
        return counter;
}
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount( [0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount( [0, 0, 0]));

//7 - Crie uma função de Caça ao Rato
function  catAndMouse (mouse, cat1, cat2) {
    let distanCat1 = mouse - cat1;
    let distanCat2 = mouse - cat2;
    let winnerCat;
    if (distanCat1 > distanCat2) {
        winnerCat = "cat1";
    } else if (distanCat2 > distanCat1 ){
        winnerCat = "cat2";
    } else {
        winnerCat = "os gatos trombam e o rato foge";
        }return winnerCat;
}
console.log(catAndMouse(7,4, 5));
console.log(catAndMouse(12,6,0));
console.log(catAndMouse(10,5,5));

//8 - Crie uma função FizzBuzz
function fizzBuzz(array){
    let arrayFizBuzz = [];
     for (let i = 0; i < array.length; i += 1){
        if (array[i] % 3 == 0 && array[i] % 5 == 0){
            arrayFizBuzz[i] = "fizBuzz";
        }   
        else if (array[i] % 3 == 0){
            arrayFizBuzz[i] = "fizz";
         } else if (array[i] % 5 == 0){
             arrayFizBuzz[i] = "buzz";
         }
         else {
             arrayFizBuzz[i] = "bug!"
         }
     } return arrayFizBuzz;
}
console.log(fizzBuzz( [2, 15, 7, 9, 45]));
console.log(fizzBuzz([7,9]));
console.log(fizzBuzz([9, 25]));

//9 - Crie uma função que Codifique e Decodifique 
  function econde(string){
      return string.replace(/a/g, '1') //Specifies the value to be returned to the function caller
            .replace(/e/g, '2')    //Perform a global replacement /x/g, o g faz replace global
            .replace(/i/g, '3')
            .replace(/o/g,'4')
            .replace(/u/g, '5');   // se colocar ";" entre eles vai dar errado
  }
  console.log(econde('hi there!'));

  function decode(string){
         return string.replace(/1/g, 'a') //Specifies the value to be returned to the function caller
             .replace(/2/g, 'e')    //Perform a global replacement /x/g, o g faz replace global
             .replace(/3/g, 'i')
             .replace(/4/g, 'o')
             .replace(/5/g, 'u');   // se colocar ";" entre eles vai dar errado
}
console.log(decode('h3 th2r2!'));
  
//10 - Crie uma função de Lista de Tecnologias
function lista (techIn, nameIn){
    let objectOut = [];
    if (techIn.length == 0) {
        return 'Vazio';      
    } else {
        techIn.sort();
    }
   for (let i = 0; i < techIn.length; i += 1){
       objectOut.push({tech:techIn[i], name: nameIn})
   } return objectOut;
}
console.log(lista(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// 11 - Crie uma função de Número de telefone
function generatePhoneNumber(number) {
    let contador = {};
    if(number.length !== 11) {
      return 'Array com tamanho incorreto.'
    } else {
      for(let index = 0; index < number.length; index +=1){
        let numero = number[index];
        if(number[index] < 0 || number[index] > 9) {
          return 'não é possível gerar um número de telefone com esses valores'
        } else if(contador[numero] != 0)
          contador[numero] +=1;
        }
      }
    for(let key in contador) {
      if (contador[key] > 2) {
          return 'não é possível gerar um número de telefone com esses valores' 
      }
    }
    let telefone = [];
    for(let index = 0; index < number.length; index +=1) {
      telefone.push(number[index])
    }
    concat = '(' + telefone[0] + telefone[1] + ') ' + telefone[2] + telefone[3] + telefone[4] + telefone[5] + telefone[6] + '-' + telefone[7] + telefone[8] + telefone[9] + telefone[10];
    return concat;
  }
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

//12 - Crie uma função de Condição de existência de um triângulo
  //The abs() method returns the absolute value of a number.
    function triangleCheck(lineA, lineB, lineC) {
        let linha1 = Math.abs(lineA);
        let linha2 = Math.abs(lineB);
        let linha3 = Math.abs(lineC);  
        if(linha1 + linha2 < linha3 || linha1 + linha3 < linha2 || linha3 + linha2 < linha1) {
          return false;
        } else {
          return true;
        }
      }
console.log(triangleCheck(10, 14, 8));

//13 - Crie uma função de boas vindas ao Bar da Trybe!
function hydrate(drink) {
    let allDrinks = drink.match(/\d/g);  // The match() method retrieves the result of matching a string against a regular expression.
    let water = 0;                      //quantidade de água inicial
    for (let index = 0; index < allDrinks.length; index += 1) { // pecorre a string das bebidas
      water += Number(allDrinks[index]);                        //Use the regular expression \d+, which means any digit from 0 to 9 (\d) repeated one or more times (+). The qualifier g will make the search global 
    }                                                           //The Number() function converts the object argument to a number that represents the object's value.
    if(water === 1) {
      return `${water} copo de água`;   //Template Literals '${} 'também permite interpolar valores em um texto
    } 
    return `${water} copos de água`;
  }
  