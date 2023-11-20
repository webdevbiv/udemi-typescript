//SECTION - Generics
const names: Array<string> = ["Max", "Manuel"];

names[0].split(" ");

const promise: Promise<string> = new Promise((res, rej) => {
  const errorCondition = false;
  setTimeout(() => {
    if (errorCondition) rej("Error");
    res("This is done");
  }, 2000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

function merge<T, U>(obj1: T, obj2: U) {
  return Object.assign({}, obj1, obj2);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj.hobbies.length);

const mergedObj2 = merge({ name: "Max" }, { age: 30 });

console.log(mergedObj2);

//SECTION - Constraints
function merge2<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

// const mergedObj3 = merge2({ name: "Max", hobbies: ["Sports"] }, 30); //FIXME - will not work

//SECTION - Another example

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["Hi there"]));

//SECTION - Constraints with "keyof"

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

//SECTION - Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems() {
    const itemsObject: { [key: string]: T } = {};
    this.data.forEach((item, index) => {
      const key = `item${index + 1}`;
      itemsObject[key] = item;
    });
    return itemsObject;
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manuel");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.addItem(1);
numberStorage.removeItem(1);

console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manuel" });
// objStorage.addItem({ name: "Manuel" });
// objStorage.removeItem({ name: "Manuel" });

// console.log(objStorage.getItems());

//SECTION - Generic Utility Types - Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ["Max", "Manuel"];
