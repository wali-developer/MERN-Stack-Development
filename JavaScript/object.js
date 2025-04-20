let user = {};

user = {
  name: "Sameer",
  age: 50,
  profession: "Software Engineer",
  isMarried: true,
  children: ["Ali", "Aamna"],
  hoppies: ["Reading", "Travelling"],
  greetings: function () {
    console.log("Greetings from Sameer");
  },
};

user.contact = "0330879343";
user.address = "Lahore";

delete user.children; // delete
user["hoppies"]; //Accessing
user.profession = "Mathematician"; // Edit

// console.log(user);

// Loop of Objects;

for (let [key, value] of Object.entries(user)) {
  // console.log(key, value);
}

const { name, age, hoppies } = user;
// console.log(name);
// console.log(age);
// console.log(hoppies);
