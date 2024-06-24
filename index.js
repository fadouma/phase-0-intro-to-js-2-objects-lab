const employee = {name : "Fanny", streetAddress : "14400 E Fremont Ave"}
function updateEmployeeWithKeyAndValue(employee, key,value){
    const copy = {...employee}
    copy[key] = value;
    return copy;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const clone = {...employee}
    delete clone [key]
    return clone
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}
