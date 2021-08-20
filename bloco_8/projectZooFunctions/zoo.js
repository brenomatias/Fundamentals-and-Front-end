const data = require('./data');
const { species, employees, prices, hours } = require('./data');

// function getSpeciesByIds(...ids) {
//     const speciesById = species.filter((specie) => ids.includes(specie.id));
//     return speciesById;
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
 return nameAndAge.residents.every(element => element.age > age);
}
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function
// o find vai localizar o animal pelo nome passado
// residents e o subgrupo de species, por isso foi passado no nameAndAge;
// o find é em cima do objeto species
// The every() method tests whether all elements in the array pass the test implemented by the provided function

function getEmployeeByName(employeeName) {
    if (employeeName === undefined) {
      return {};
    }
    return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
  }
  
console.log(getEmployeeByName('Nigel'))

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
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