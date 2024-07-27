let users = [
  {
    id: 44,
    name: "Ahmed",
    age: 29,
    college: "Caltech",
  },
  {
    id: 23,
    name: "Ali",
    age: 30,
    college: "SANS",
  },
  {
    id: 25,
    name: "Miles",
    age: 30,
    college: "TMC",
  },
];

/**
 * Delete using filter
 * User id not equal to id(to be deleted)
 */

let deleetingid = 44;
let updatedUsers = users.filter((user) => {
  return user.id != deleetingid;
});
console.log(updatedUsers);

/**
 * create new array for forEach method
use push instead of return for forEach Method

 */

// let updatedUser = [];
// users.forEach((user) => {
//   if (user.name == "Ali") {
//     updatedUser.push({ ...user, age: 9 });
//   } else updatedUser.push(user);
// });
// console.log(updatedUser);

// let updatedUser = users.map((user, index) => {
//   if (index == 0) {
//     return { ...user, age: user.age + 7, college: "School" };
//     //user.age is the value of the key, age
//   } else {
//     return user;
//   }
// });
// console.log(updatedUser, "new array");
// console.log(users.length, "new array");

// let updatedUser = users.map((user, index) => {
//   // delete user.collage;
//   return { ...user, college: "school" };
// });
// console.log(updatedUser, "new array");
// console.log(users.length, "new array");
