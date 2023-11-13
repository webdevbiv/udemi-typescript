enum User {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
  user: User; //enum
} = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], //tuple
  user: User.ADMIN, //enum
};

person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

console.log(person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.user === User.ADMIN) {
  console.log("user rights admin");
}
