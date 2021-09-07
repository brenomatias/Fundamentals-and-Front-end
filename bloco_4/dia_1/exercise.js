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

let salarioBruto = 3000 ;
let INSS8 = 0.08;
let INSS9 = 0.09;
let INSS11 = 0.11;
let INSS570 = 570.88; 
let IR075 = 0.075;
let IR15 = 0.15;
let IR22 = 0.225;
let IR27 = 0.275;
let descontoINSS = null;
let salarioINSS = salarioBruto - descontoINSS;
let descontoIR = null;
let descontoTotal = null;


if (salarioBruto <= 1556.94) {
  descontoINSS = salarioBruto * INSS8;
  console.log("Desconto INSS " + descontoINSS);
} else if (salarioBruto > 1556.95 && salarioBruto < 2594.92){
   descontoINSS = salarioBruto *INSS9;
   salarioINSS = salarioBruto - descontoINSS;
   console.log("Desconto INSS " + descontoINSS + " Salário " + salarioINSS); 
} else if (salarioBruto > 2594.93 && salarioBruto < 5189.82){
  descontoINSS = salarioBruto *INSS11;
  salarioINSS = salarioBruto - descontoINSS;
  console.log("Desconto INSS " + descontoINSS + " Salário " + salarioINSS);
} else if (salarioBruto > 5189.82){
  descontoINSS = salarioBruto + INSS570;
  console.log("Desconto INSS " + descontoINSS + " Salário " + salarioINSS);
}
   else {
   }


if (salarioINSS >1903.99 && salarioINSS < 2826.70){
  descontoIR = (salarioINSS*IR075) - 142.80;
  console.log("Desconto IR " + descontoIR ) ;
  salarioLiquido = salarioINSS - descontoIR;
  console.log("Salário líquido é " + salarioLiquido)
}