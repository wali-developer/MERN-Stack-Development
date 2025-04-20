// Loops -> for, while, for of, for in
const arr = [10, 20, "Ali", true, null, 54];

for (let i = 0; i < arr.length; i++) {
  //   console.log("Line: ", arr[i]);
}

let i = 0; // step 1
while (i < 10) {
  // step 2
  //   console.log("Line: ", i + 1); // step 3 - code execution
  i++; // step 4
}

for (let ele of arr) {
  //   console.log(ele);
}

for (let key in arr) {
  console.log(key, arr[key]);
}
