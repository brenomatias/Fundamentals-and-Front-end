let n = 7;
let string = "";
// External loop
for (let i = 0; i < n; i += 1) {
  // printing spaces
  for (let j = 3; j >= i; j += 1) { //The number of spaces in a row is n - i
    string += " ";
  }
  // printing star
  for (let k = 0; k <=i*2; k += 1) { //the number of stars in a row is (2 * i - 1)
    string += "*";
  }
  string += "\n";
}
console.log(string);