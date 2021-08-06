let n = 5; 
let  quadrado = "";
for (let i = 1; i <= n; i += 1) { // external loop
  for (let j = 0; j < n; j += 1) { // internal loop
    quadrado += "*";
  }
  quadrado += "\n";
}
console.log(quadrado);


let triangulo = "";
for (let i = 1; i <= n; i += 1) { //external loop will take care of columns of pattern.
  for (let j = 0; j < i; j += 1) { //internal loop will print rows of the pattern.
    triangulo += "*";
  }
   triangulo += "\n"
}
console.log(triangulo);


let leftTri = "";  //The external loop will execute internal loops for 'n' number of times and the internal loop will design a pattern for each row.
for (let i = 1; i <= n; i += 1) {
  // printing spaces
  for (let j = 0; j < n - i; j += 1) {
    leftTri += " ";
  }
  // printing star
  for (let k = 0; k < i; k += 1) {
    leftTri += "*";
  }
  leftTri += "\n";
}
console.log(leftTri);


let string = "";
// External loop
for (let i = 0; i < n; i += 1) {
  // printing spaces
  for (let j = 0; j < n - i; j += 1) { //The number of spaces in a row is n - i
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) { //the number of stars in a row is (2 * i - 1)
    string += "*";
  }
  string += "\n";
}
console.log(string);