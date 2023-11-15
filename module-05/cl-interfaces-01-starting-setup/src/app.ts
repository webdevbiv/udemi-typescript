//SECTION - CLASSES
class Department {
  // name: string;
  private employees: string[] = []; // private makes it only accessible within the class
  constructor(public name: string, private readonly id: number) {}

  describe(this: Department) {
    console.log("Department: " + this.name + " ID: " + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting", 1);

accounting.addEmployee("Max");
accounting.addEmployee("Jim");

// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();

//SECTION - INHERITANCE, PROTECTED & PRIVATE, STATIC
class Department2 {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(private readonly id: string, public name: string) {}
  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  describe(this: Department2) {
    console.log("Department: " + this.name + " ID: " + this.id);
  }
}

const employee1 = Department2.createEmployee("Max");
console.log(employee1, "employee1", Department2.fiscalYear);

class ITDepartment extends Department2 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("d1", ["Max"]);

console.log(it);

class AccountingDepartment extends Department2 {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting2 = new AccountingDepartment("d2", []);

console.log(accounting2);

console.log(accounting2);

accounting2.addReport("Weekly Report");
accounting2.mostRecentReport = "Year End Report";
console.log(accounting2.mostRecentReport);
