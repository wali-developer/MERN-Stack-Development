const numbers = [22, 11, 32, 43, 56, 27, 87, 11, 43, 55, 37, 43];

// Create a function that calculate sum of even numbers in given array.

const sumOfEven = () => {
  let sum = 0;
  const even = [];
  for (let number of numbers) {
    if (number % 2 == 0) {
      sum += number; // sum = sum + number
      even.push(number);
    }
  }

  console.log("The sum of " + even + " is: ", sum);
  return sum;
};

// sumOfEven();

// Create a function that recive a number as parameter and  this will check the number is exist in the array or not.

const isExist = (number) => {
  for (let num of numbers) {
    if (num == number) {
      return true;
    }
  }

  return false;
};

// isExist(117);

// Create a function that receive a number as a paramter and will check it's count in given array.

const countOccurence = (number) => {
  let count = 0;
  for (let num of numbers) {
    if (num === number) {
      count = count + 1;
    }
  }

  console.log("The count of the" + number + " is: ", count);
  return count;
};

countOccurence(43);
