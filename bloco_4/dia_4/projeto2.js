//1 - Crie uma função usando o opera
let statement1 = true;
let statement2 = false;

function compareTrue (statement1, statement2){
    let resultado;
    if (statement1 == true && statement2 == true){
       resultado = true;
    } else {
        resultado = false;
    } 
    return resultado;
}
console.log(compareTrue(statement1, statement2));
console.log(compareTrue(true, true));

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
    let returnArray = setence.split(""); //Split a string into an array of substrings
    for(let i = 0; i < setence.length; i += 1){
        returnArray[i] += '';
        return returnArray;
        }
    } 

console.log(spliteSentence("vamo que vamo"));

