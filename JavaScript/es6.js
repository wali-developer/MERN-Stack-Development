const welcome = "Welcome to JavaScript";
const userName = "Wali Ullah";

// console.log("Welcome " + welcome + " " + userName);
// console.log(`Welcome ${welcome} ${userName} ${500}`);

const sum = (...rest) => {
  return rest.reduce((accamulator, currItem) => currItem + accamulator, 0);
};

const nums = [45, 76, 15, 99];

const result = sum(...nums);
console.log(result);
