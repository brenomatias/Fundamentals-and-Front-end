let a = 3;
let b = 3;
let soma = a+b;
let subt = a-b;
let mult = a*b;
let div = a/b;
let mod = a%b;

console.log("Soma = " + soma);
console.log("Subtração = " + subt);
console.log("Multiplicação = " + mult);
console.log("Divisão = " + div);
console.log("Módulo = " + mod);

let n1 = 9;
let n2 = 5;

if (n1 > n2) {
    console.log("O maior número é " + n1)
}else {
     console.log("O maior número é " + n2)  
} 

let n3 = 9;
let n4 = 10;
let n5 = 200;

if ( n3 > n4 && n3 >n5) {
    console.log("O maior número é  " + n3);
} else if (n4 > n3 && n4>n5){
    console.log("O maior número é " + n4);
}
else {
    console.log("O maior número é " + n5);
}

let var1 = "negative";

if (var1 == "positive") {
    console.log("positive");
  } else if (var1 == "negative") {
    console.log("negative");
  } else {
    console.log("invalid iput");
  }

  let ang1 = 90;
  let ang2 = 60;
  let ang3 = 60;
  let somaAng = ang1 + ang2 + ang3
  console.log("Soma angulos internos " + somaAng)
  
  if (ang1 < 0 || ang2 < 0  || ang2 < 0) {
    console.log("inavalid input");
  }
    if (somaAng > 180 || somaAng < 180){
      console.log("false");
  } else if (somaAng = 180){
      console.log("true");
  } else {
      console.log("invalid iput");
  }
   
let chessPiece = "Bishop";
chessPiece = chessPiece.toLowerCase()
  if (chessPiece == "pawn" || chessPiece == "bishop" || chessPiece == "knight") {
      console.log("Peça válida");
  }else {
      console.log("peça invalida");
  }
  
let grade = 80;
let percentage = (grade*100)/100;

if (percentage >= 90){
  console.log("A");
} else if (percentage >= 80){
  console.log("B");
} else if (percentage >= 70){
  console.log("C")
} else if (percentage >=60) {
  console.log ("D")
} else if (percentage >=50){
  console.log("E")
} else {
  console.log("F")
}

let num7 = 10;
let num8 = 3;
let num9 = 3;

if (num7%2 == 0 || num8%2 == 0 || num9%2 == 0){
  console.log("true")
} else {
  console.log("Não existe numero par.")
}


let quantidade = -10;
let venda = 100;
let vendaTotal = quantidade*venda;
let custo = 80;
let imposto = 1.2;
let custoTotal = (custo*imposto)*quantidade
let lucro = vendaTotal - custoTotal


if (custo < 0 || venda < 0 || quantidade < 0){
  console.log("Erro")
} else {
 console.log("O lucro é de " + lucro)
}

let salarioBruto = ;
let INSS8 = ;
let INSS9 = ;
let INSS11 = ;
let INSS = ; 
let IR0 = ;
let IR1 = ;
let IR2 = ;
let IR3 = ;
let IR4 = ;


INSS 

salarioBruto <= 1556.94 
salarioBruto >= 1556.94 && salarioBruto <= 2594.92
salarioBruto >= 2594.93 && salarioBruto <= 5189.82 
salarioBruto > 5189.82

IR 

salarioBruto < 1903.98 
salarioBruto >= 1903.99 && salarioBruto <= 2826.65 
salarioBruto >= 2826.66 && salarioBruto <= 3751.05
salarioBruto >= 3751.06 && salarioBruto <= 4664.68
salarioBruto > 4664.68