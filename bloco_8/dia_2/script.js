const { equal } = require('assert');
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = books.find((authors) => authors.author.birthYear === 1947); // authors vai funcionar como parametro substituido por books
console.log(authorBornIn1947);

function getKeyByValue(object, value) {
   let name = ''
   object.find((key) => {
      if (key.author.birthYear === value){
    name = key.author.name;
      console.log(name)
      return name 

      }
  });
}
console.log(getKeyByValue(books, 1947));

//2 
function smallerName(array) {
  let nameBook;
  
  array.forEach((element, i) => {
    let nameLenght = Object.keys(element.name);
    let lenght = 5;
    if (nameLenght.length < lenght){
      nameBook = element.name;
    }
  });
  return nameBook;
  
}

console.log(smallerName(books));
assert.strictEqual(smallerName(books), 'Duna');

// 3
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook(array, value) {
  let book;
  array.find(element => {
    let nameLenght = Object.keys(element.name);
    if (nameLenght.length === value){
      book = element.name;
    }
  });
  return book;
}

console.log(getNamedBook(books, 26));
