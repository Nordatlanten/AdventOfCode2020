import { puzzleInput } from "./puzzleinput.js";

let splitInput = puzzleInput.split("\n");
let coordinates = [];
let stepList = [];

for (let m = 0; m < splitInput.length; m++) {
  coordinates.push(splitInput[m].split(""));
}

//Part 1
let target = 0;

for (let i = 0; i < coordinates.length; i++) {
  let x = i + 1;
  let step = "";
  target += 3;

  let nextRow = coordinates[x];

  if (target >= coordinates[i].length) {
    target -= coordinates[i].length;
  }

  if (nextRow) {
    step = nextRow[target];
    console.log("Step: " + step);
    stepList.push(step);
    step = "";
  }
}

let trees = [];

for (let n = 0; n < stepList.length; n++) {
  if (stepList[n] === "#") trees.push("#");
}
console.log("The answer is: " + trees.length);

//Part 2
