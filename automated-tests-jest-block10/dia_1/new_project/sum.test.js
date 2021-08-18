// so arquivos criados depois da instalação do Jest receberão o test automatizado
const sum = require('./sum'); // importar a função

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});