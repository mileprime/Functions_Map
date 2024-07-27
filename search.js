let users = [
  {
    id: 4820,
    name: "Ahmed",
    age: 27,
  },
  {
    id: 4821,
    name: "Ali",
    age: 27,
  },
];

let input = document.getElementById("searchInput");
let btn = document.getElementById("btn");
let list = document.getElementById("userList");

btn.addEventListener("click", () => {
  let searchInput = input.value;
  let updatedUsers = users.filter((user) => {
    return user.age.toString().includes(searchInput);
  });
  //   list.innerHTML = "";
  users = updatedUsers;
  users.forEach((user) => {
    let li = document.createElement("li");
    li.textContent = user.name;
    list.appendChild(li);
  });
});

//get the value of the search input
//filter users array based on search
// inside the filter use include to cjeck if we have the search input in my array
//update the arrau
//update the DOM
// console.log(searchInput.includes("TMC"), "include");
