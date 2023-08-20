//Boolean - true | false
//falsy values
// 1. 0
// 2. null
// 3. undefined
// 4. false
// 5. NaN
// 6. ""

console.log("regular if else: ---------------");
if (1 === "1") {
  console.log("Ye, it is true");
} else {
  console.log("No, it is false");
}

console.log("if..else if..else: ---------------");

if (false) {
  console.log("This else if 1");
} else if (false) {
  console.log("This else if 2");
} else if (true) {
  console.log("This else if 3");
} else {
  console.log("Nothing");
}

console.log("Ternary operator: ---------------");

let obj = {
  age: 21,
};

obj.age >= 18 ? console.log("Yes, is allowed") : console.log("No, restricted");

let isAllowed = obj.age >= 18 ? "Yes, is allowed" : "No, restricted";

console.log(isAllowed);

console.log("for loop: ---------------");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("while loop: ---------------");

let i = arr.length - 1;
while (i >= 0) {
  console.log(arr[i]);
  i = i - 1;
}

console.log("do..while loop: ---------------");

let j = 0;
do {
  if (j % 2 === 0) {
    console.log(arr[j]);
  }
  j++; // j = j + 1
} while (j < arr.length);

console.log("for..in loop: ---------------");

const animal = {
  type: "cat",
  age: "2",
  color: "white",
  asdsdfasdfasdfsadf: "sadgearg",
};

for (let item in animal) {
  console.log(`${item}: ${animal[item]}`);
}

console.log("for..of loop: ---------------");

for (let item of arr) {
  console.log(item);
  if (item === 5) {
    break;
  }
}

console.log("switch - case: ---------------");

let userAge = 19;

switch (userAge) {
  case 18:
    console.log("Allowed");
    break;
  case 17:
  case 16:
    console.log("Partially allowed");
    break;
  case 15:
  case 14:
  case 13:
  case 12:
    console.log("Not allowed");
    break;
  default:
    console.log("Invalid age");
}
