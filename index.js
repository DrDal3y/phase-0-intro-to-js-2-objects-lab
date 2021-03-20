// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '951 Duke of Norfolk'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, name) {
    let newEmployee = [employee, key, name];
      delete newEmployee[key, name];
      return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = employee
    delete newEmployee[employee, key];
    return newEmployee;
}
 
