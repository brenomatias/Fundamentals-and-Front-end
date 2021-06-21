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