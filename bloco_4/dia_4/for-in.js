//for/in – Used for looping through the properties of an object.
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index +=1);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let person in names) {
      console.log("Olá " + names[person]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
      console.log(key, car[key]);
  }