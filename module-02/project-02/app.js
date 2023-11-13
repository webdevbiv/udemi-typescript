var User;
(function (User) {
    User[User["ADMIN"] = 0] = "ADMIN";
    User[User["READ_ONLY"] = 1] = "READ_ONLY";
    User[User["AUTHOR"] = 2] = "AUTHOR";
})(User || (User = {}));
var person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    user: User.ADMIN, //enum
};
person.role.push("admin");
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Sports", 1];
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.user === User.ADMIN) {
    console.log("is admin");
}
