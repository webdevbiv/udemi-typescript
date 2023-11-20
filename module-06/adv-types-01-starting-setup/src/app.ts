//SECTION - Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee01: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

//NOTE - Intersection Types Interfaces

interface Admin1 {
  name: string;
  privileges: string[];
}

interface Employee1 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee1 extends Admin1, Employee1 {}

// type ElevatedEmployee2 = Admin1 & Employee1;

const employee02: ElevatedEmployee1 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(employee02);

type Combined = string | number;
type Numeric = number | boolean;

type Universal = Combined & Numeric;

//SECTION - Type Guards

function add(a: Combined, b: Combined) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + " " + b.toString();
  }
  return a + b;
}

console.log(add("Max", "Schwarzmüller"));

type UnknownEmployee = Employee1 | Admin1;

//NOTE - in
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(employee02);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

//NOTE - instanceof
function useVehicle(vehicle: Vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  vehicle.drive();
}

useVehicle(v1);
useVehicle(v2);

//SECTION - Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//SECTION - Type Casting

const paragraph = document.querySelector("p");

const paragraphId = document.getElementById("message output");

const userInput = document.getElementById("user-input");

// userInput.value = "Hi there!";

//NOTE - type casting with angle brackets
const userInputType = <HTMLInputElement>document.getElementById("user-input");

//NOTE - type casting with as
const userInputType2 = document.getElementById(
  "user-input"
) as HTMLInputElement;

//NOTE - type casting with '!'
const userInputType3 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputType3.value = "Hi there type3!";

//NOTE - type casting with 'if'
const userInputType4 = document.getElementById("user-input");

if (userInputType4) {
  (userInputType4 as HTMLInputElement).value = "Hi there type4!";
}

//SECTION - Properties in objects
interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: "1",
  email: "Not a valid email!",
};

//SECTION - Function Overloads
function addFO(a: number, b: number): number;
function addFO(a: string, b: string): string;
function addFO(a: string, b: number): string;
function addFO(a: number, b: string): string;
function addFO(a: Combined, b: Combined) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + " " + b.toString();
  }
  return a + b;
}

const result = addFO("Max", "Schwarzmüller");

console.log(result);

//SECTION - Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

//SECTION - Nullish Coalescing

const userInput2 = null;

const userInputNullish = "";

const storedData2 = userInput2 ?? "DEFAULT";

const storedData = userInputNullish ?? "DEFAULT";

console.log(
  "Stored storedData: ",
  storedData,
  "Stored storedData2: ",
  storedData2
);
