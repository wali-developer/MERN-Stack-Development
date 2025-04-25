// console.log("1");

setTimeout(() => {
  // console.log("2");
}, 3000);

// console.log("3");

// Promises
// Promises have 2 values -> Fulfilled or Rejected
// Promise have 3 stats -> Pending, Resolve, Reject

const getPromise = () => {
  return new Promise((resolve, reject) => {
    const loading = false;
    setTimeout(() => {
      if (loading === true) {
        return resolve("Promise has been Resolved..");
      } else {
        return reject("Promise Rejected...");
      }
    }, 2000);
  });
};

// getPromise()
//   .then((response) => console.log("Resposne from promise: ", response))
//   .catch((error) => (document.getElementById("welcome").innerText = error));

const getData = async () => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((jsonData) => console.log("USERS: ", jsonData))
  //   .catch((err) => {
  //     console.log("ERROR: ", err);
  //   })
  //   .finally(() => {
  //     console.log("Finally...");
  //   });

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log("DATA: ", data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally...");
  }
};

// getData();
