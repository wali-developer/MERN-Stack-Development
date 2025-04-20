// Variables
// var, let, const

// console.log(pi); // Hoisting

var a = "Welcome to JavaScript!";

// console.log(a);

let b;
b = 50; // Memory allocation with with any specific address (F9432).

var a = 200;

// console.log(a);

const pi = 3.14;

// console.log(pi);

// Data types
// 1 - Primitive data types - String, Number, Boolean, Null, Undefined
// 2 - Non-primitive / Referecne data types - Object, Array, Functions

const user = {
  name: "John", // key value pair
  age: 30,
  address: "New York",
  isMarried: true,
  son: {
    name: "Jane",
    age: 5,
  },
};

// Array
const subjects = [
  "Java", // 0
  "Python", // 1
  ["HTML", "CSS"], //2
  100, // 3
  true, // 4
  { name: "Ali" }, // 5
];

// console.log(subjects[2][0]); // HTML

// Operators in JS
// 1 - Arithmetic Operators - +, -, *, /
// 2 - Assignment Operators - =, +=, -=,
// 3 - Comparison Operators - ==, ===, !=, !==, >, <, >=, <=
// 4 - Logical Operators - &&, ||, !
// 5 - Ternary Operators - ? :

// console.log(26 / 10);

let x = 20;
x += 20; // x = x + 10
x -= 5; // x = x - 5
// console.log(x);

let y = "25";

// console.log(x + Number(y));

// console.log(x === 25 || y !== 25);

// console.log(
//   x >= 25 ? "X is greater than or equals to 25" : "X is less thaan 25"
// );

// Conditional Statements
// 1 - if else statement
// 2 - Switch case statement
// 3 - Ternary operator

if (x >= 20 && x <= 30) {
  //   console.log("X is greater than or equals to 20");
} else if (x >= 30 && x <= 40) {
  //   console.log(
  //     "X is greater than or equals to 30 and less than or equals to 40"
  //   );
} else {
  //   console.log("The value of X is: " + x);
}

// Conditional statments with ternary operator

const results =
  x >= 20 && x <= 30
    ? "X is greater than or equals to 20"
    : x >= 30 && x <= 40
    ? "X is greater than or equals to 30 and less than or equals to 40"
    : "The value of X is: " + x;

// console.log(results);

// String methods
const str = "Welcome to JavaScript!";

// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str.substring(0, 7));
// console.log(str.includes("Script"));
// console.log(str.toUpperCase());
// console.log((20).toString());
