let users = [
  {
    name: "Ahmed",
    age: 29,
  },
  {
    name: "Ali",
    age: 30,
  },
];

let updatedUser = users.map((user, index) => {
  if (index == 0) {
    return { ...user, age: user.age + 7 };
    //user.age is the value of the key, age
  } else {
    return user;
  }
});
console.log(updatedUser, "new array");
console.log(users.length, "new array");
