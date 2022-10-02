const employee = {
    name: 'Asaad',
    streetAdress: "Nablus, Ps",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newthing = {
        ...employee,
        [key]: value,
    };
    return newthing;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;

    return employee;
};
function deleteFromEmployeeByKey(employee, key) {

    const newthing = { ...employee };

    delete newthing[key];

    return newthing
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
};