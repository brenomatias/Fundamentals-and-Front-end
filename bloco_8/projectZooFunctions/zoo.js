const data = require('./data');
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) { 
 let speciesArray = []; // define array de retorno
 ids.forEach(element => speciesArray.push(species.find(specie => specie.id === element)));
 return speciesArray;
  }
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce','533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'))
// (...) Spread syntax can be used when all elements from an object or array need to be included in a list of some kin
// The filter() method creates a new array with all elements that pass the test implemented by the provided function
// vai filtrar as espécies de acordo com a condição de filter, que será a função include
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
// realiza um filtro na array species e compara com os ids repassados (specie é referente a species na condição do filter)
// se for true, cai na adição do filtro

function getAnimalsOlderThan(animal, age) {
 const nameAndAge = species.find(animalName => animalName.name === animal); // constante para armazenar o valor da chave name em species
 return nameAndAge.residents.every(element => element.age > age); // animalName será o nome dentro da array specie para comparar
} // ta retornando valores em comparação a species.residents.age
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function
// o find vai localizar o animal pelo nome passado
// residents e o subgrupo de species, por isso foi passado no nameAndAge;
// o find é em cima do objeto species
// The every() method tests whether all elements in the array pass the test implemented by the provided function

function getEmployeeByName(employeeName) {
    if (employeeName === undefined) {
      return {};
    }
    return employees.find(employeeName => employeeName.firstName === employeeName ||employeeName.lastName === employeeName);
  } // employeeName aqui poderia ser qualquer nome mas se refere ao parametro recebido 
  
console.log(getEmployeeByName('Nelson'))

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith,
  };
}
//Spread syntax can be used when all elements from an object or array need to be included in a list

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}
// The some() method tests whether at least one element in the array passes the test implemented by the provided function
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
// includes é a condição de some (vai verificar se algum elemento )
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (!species) { // !x will return true for every "falsy" value (empty string, 0, null, false, undefined, NaN)
    const everyAnimal = data.species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length; // aqui define as propriedades do objeto
      return accumulator; // accumulator pega o valor chave inicialmente, e o valor é current value
    }, {}); // que é definido pelo valor valor do accumulator
    return everyAnimal;
  }
  const specificAnimal = data.species.find(element => element.name === species); // essa parte é para se tiver 
  const quantity = specificAnimal.residents.length; // entrada válida
  return quantity;
}
console.log(countAnimals('lions'))
// Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration 
// throughout the array, and ultimately becomes the final, single resulting value

function calculateEntry(entrants) {
  if (!entrants) { 
    return 0;
  }
  entrants = { adult = 0, senior= 0, child = 0 }; // define os valores iniciais do parâmetro
  return (adult * prices.Adult + senior * prices.senior + child * prices.child); // retorna os valores das chaves
  // de preço em prices
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
 
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};