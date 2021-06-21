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
      console.log("peça invalida")
  }
  
  