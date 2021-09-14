

// 2
const sorteio = (numApostado, callback) => {
  const numSorteado = Math.floor(Math.random() * (5 - 1 + 1)) + 1  ;
  console.log(numSorteado); // https://www.programiz.com/javascript/examples/random-between-numbers
  console.log(numApostado);
  if (numApostado === numSorteado) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
  callback()
};

console.log(sorteio(3));

// 3
const avaliacao = (gabarito, respostas, check => {
  for (let i = 0; i < gabarito.lenght; i += 1){
    
  }
)