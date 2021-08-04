function getEmployeeByName(employeeName) {
    if (employeeName === undefined) {
      return {};
    }
    return employees.find((name) => name.firstName === employeeName || name.lastName === employeeName);
  }
  
console.log(getEmployeeByName('Nelson'))