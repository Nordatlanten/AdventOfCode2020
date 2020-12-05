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

  if (target >= coordinates[i].length) target -= coordinates[i].length;

  if (nextRow) {
    step = nextRow[target];
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

function getTrees(right, down) {
  let target = 0;
  let match = "";
  let matches = [];
  let trees = [];

  for (let i = down; i < coordinates.length; i += down) {
    target += right;

    let nextRow = coordinates[i];

    if (target >= coordinates[i].length) target -= coordinates[i].length;
    if (nextRow) {
      match = nextRow[target];
      matches.push(match);
      match = "";
    }
  }

  for (let n = 0; n < matches.length; n++) {
    if (matches[n] === "#") trees.push("#");
  }
  console.log("Tree count: " + trees.length);
  return trees.length;
}

console.log(
  "The answer is: ",
  getTrees(1, 1) *
    getTrees(3, 1) *
    getTrees(5, 1) *
    getTrees(7, 1) *
    getTrees(1, 2)
);
