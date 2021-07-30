function getNamedBook(array) {
  let book;
  array.find(element => {
    let nameLenght = Object.keys(element.name);
    if (nameLenght.length === 26){
      book = element.name;
    }
  });
  return book
}

console.log(getNamedBook(books));