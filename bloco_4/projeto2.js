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