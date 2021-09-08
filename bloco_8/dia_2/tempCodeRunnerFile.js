
  let birthYear2 = (birth) => {
    birth = Object.values(birth.birthYear);
    return birth > 0;
  }

  console.log(books.every(birthYear2));