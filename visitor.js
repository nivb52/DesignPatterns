function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  setSalery: function (salary) {
    this.salary = salary;
  },

  getSalary: function () {
    return this.salary;
  },

  accepter: function (visitorFn) {
    visitorFn(this);
  },
};

// ===============================
// VISITOR
// ===============================

const super_employee = new Employee('me', 10000);

console.log('employee salery before Covid-19');
console.log(super_employee.getSalary());

function ExtraCovid19Salary(employee) {
  employee.setSalery(employee.getSalary() * 2);
}

super_employee.accepter(ExtraCovid19Salary);
console.log('employee salery during Covid-19');
console.log(super_employee.getSalary());
