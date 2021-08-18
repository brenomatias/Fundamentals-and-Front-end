// so arquivos criados depois da instalação do Jest receberão o test automatizado
const sum = (a, b) => a + b;

test('sums two values', () => { // A função test espera três argumentos
  expect(sum(2, 3)).toEqual(5);
});