const users = ["Ali", "Usama", "Sameer", "Uzair", "Wasim"];
const users1 = ["Afaq", "Farooq"];

// console.log(users.at(3));
// console.log(users.includes("Sameer"));
users.concat(users1);
users.push("Wali");
users.pop();
// console.log(users.slice(0, 2));
users.splice(2, 0, "Muhammad");

users.shift();
users.unshift("Ali");

// High Order methods

const foundUser = users.find((item) => item === "Uzair");
const isExistUser = users.some((user, index, array) => user === "Uzair");
const allExist = users.every((user, index, array) => user === "Uzair");

// Return new array
const nums = [12, 43, 22, 87, 36];
const newArr = nums.map((num, index, array) => num * 2);
const filteredNumbers = nums.filter((number) => number > 15);
// nums.forEach((number) => console.log(number));
const result = nums.reduce(
  (accamulator, currItem) => currItem + accamulator,
  0
);

// console.log(result);

// Array Distructuring
const [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);
