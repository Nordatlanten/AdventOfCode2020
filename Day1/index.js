import { Numbers } from "./numbers.js";

let sum = 2020;
let puzzleInput = Numbers.split("\n");
let list = puzzleInput.map((x) => parseInt(x, 10));
let savedItems = [];
let savedItems2 = [];

//PART 1
for (let i = 0; i < list.length; i++) {
  let value1 = list[i];

  for (let z = 0; z < list.length; z++) {
    let value2 = list[z];

    if (value1 + value2 == sum) {
      savedItems.push(value1, value2);
      if (savedItems.length == 2) {
        console.log(savedItems);
      }
    }
  }
}

console.log("First answer is: " + 1106 * 914);

//PART 2
for (let i = 0; i < list.length; i++) {
  let value1 = list[i];

  for (let z = 0; z < list.length; z++) {
    let value2 = list[z];

    for (let m = 0; m < list.length; m++) {
      let value3 = list[m];

      if (value1 + value2 + value3 == sum) {
        savedItems2.push(value1, value2, value3);
        if (savedItems2.length == 3) {
          console.log(savedItems2);
        }
      }
    }
  }
}

console.log("Second answer is: " + 401 * 958 * 661);
