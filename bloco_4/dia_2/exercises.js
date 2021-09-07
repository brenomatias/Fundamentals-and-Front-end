let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
  }

let soma = 0;
for (let i =0; i <numbers.length; i += 1){
    soma += numbers[i];
}
console.log(soma);
let media = soma/(numbers.length -1);
console.log(media);

if (media > 20){
    console.log("Maior que 20.");
} else {
    console.log("Menor ou igual a 20");
}

let max = 0;
for (let i = 0; i < numbers.length; i+= 1) {
   if ( numbers[i] > max ) {
      max = numbers[i];
    }
   }
console.log(max);

let impar = 0;
for (let i = 0; i < numbers.length; i+= 1) {
   if ( numbers[i]%2 != 0 ) {
       impar =numbers[i];
       console.log(numbers[i])
      } else {      console.log("Nenhum valor impar encontrado.")
      }
   }

let min = 10000;
for (let i = 0; i < numbers.length; i+= 1) {
   if ( numbers[i] < min ) {
      min = numbers[i];
    }
   }
console.log(min);

let array = [];
for (i = 0; i < 25; i+= 1){
    array[i] = i +1;
}
console.log(array);

let divisao = 0;
for (i = 0; i <array.length; i+= 1){
    divisao = array[i]/2;
    console.log(divisao);
}
