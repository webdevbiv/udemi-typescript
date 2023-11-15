// const add = (a: number = 5, b: number) => a + b;

// console.log(add(1, 2));

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(undefined, 2));

const hobbies = ["Sports", "Cooking"];
console.log(hobbies.map((hobby) => "Hobby: " + hobby));

const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  let result = 0;
  result = numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
  return result;
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies);

const { firstName: userName, age } = person;

console.log(userName, age);
