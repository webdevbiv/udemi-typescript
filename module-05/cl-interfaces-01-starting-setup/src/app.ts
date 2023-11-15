//SECTION - INTERFACES
//NOTE - function

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Named {
  readonly name: string;
  outputName?: string; //NOTE - optional
}

interface Person extends Named {
  age: number;
  outputName?: "test";

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  outputName: "test",

  greet(phrase: string) {
    console.log("user1: " + phrase + " " + this.name + " " + this.outputName);
  },
};

user1.greet("Hi there - I am");

//SECTION - CLASSES & INTERFACES

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

let user2: Greetable;

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user3: Greetable;

user3 = new Person("Max");

user3.greet("Hi there - I am");

console.log(user3);
