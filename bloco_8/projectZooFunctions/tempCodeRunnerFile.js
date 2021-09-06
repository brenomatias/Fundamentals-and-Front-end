
function getEmployeeByName(employeeName) {
    if (employeeName === undefined) {
      return {};
    }
    return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
  }
  
console.log(getEmployeeByName('Nigel'))