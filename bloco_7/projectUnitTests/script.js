// Requisito 1

const average = (array) => {
    if (array.length === 0) {
      return undefined;
    } 
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) { 
      if (typeof array[i] !== 'number') { //  valor não númerico https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
        return undefined; // o loop vai passar por todos valores da array
      }
        sum += array[i];
    }
    let averageResult = sum / array.length;
    averageResult = Math.round(averageResult); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    return averageResult;
  };
        
module.exports = average;

// console.log(average([2,2]));

// Requisito 2

const assert = require('assert'); // The syntax for including the assert module in your application:
// https:www.w3schools.com/nodejs/ref_assert.asp

//  const numbers = (array) => { // função que falha 
//   for (let i = 0; i < array.length; i += 1) {
//     if (typeof array[i] === 'number') {
//       return true;
//     }
//   }
//   return false;
// };

const numbers = (array) => { // funçao que recebe a array como parâmetro
    for (let i = 0; i < array.length; i += 1) {
      if (typeof array[i] !== 'number') {
        return false;
      }
    }
    return true;
  };

assert.strictEqual(numbers([' ']), false, "teste vazio"); // Checks if two values are equal, using the strict equal operator (===)
assert.strictEqual(numbers([10, 2, 3, 6, 5]), true, "teste array correta"); // message: Specifies the error message to be assigned
// to the AssertionError. If omitted, a default message is assigned
assert.strictEqual(numbers([5, 2, '3', 6]), false, "teste string"); 
assert.strictEqual(numbers([1, 'a', 3]), false, "teste letter string"); // este teste também nao passa, mas nem chega nele porque 
// quebra antes (no caso da função que não passa nos testes)

module.exports = numbers;

// Requisito 3

const vqv = (nome, idade) => { // 
    if (typeof (nome) !== 'string' || typeof (idade) !== 'number') {
        return undefined;
      }
      return `Oi, meu nome é ${nome}!
    Tenho ${idade} anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!`;
    };

console.log(vqv('Breno', 26));

assert.strictEqual(vqv(['Breno', 26]), true, "teste 1"); 

module.exports = vqv;