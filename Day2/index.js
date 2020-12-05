import { puzzleInput } from "./puzzleInput.js";

let lineSplitInput = puzzleInput.split("\n");
let inputList = [];

for (let i = 0; i < lineSplitInput.length; i++) {
  inputList.push(lineSplitInput[i].split(" "));
}

//Part 1
let validPasswords1 = [];

for (let i = 0; i < inputList.length; i++) {
  let rangeItem = inputList[i][0];
  let stringRange = rangeItem.split("-");
  let numberRange = [];

  for (let i = 0; i < stringRange.length; i++) {
    numberRange.push(parseInt(stringRange[i], 10));
  }

  let [range1, range2] = numberRange;

  let letter = inputList[i][1].split(":");
  letter.pop();

  let password = inputList[i][2].split("");
  let entries = password.map((x) => x == letter);
  let matches = [];
  for (let j = 0; j < entries.length; j++) {
    if (entries[j] == true) matches.push(entries[j]);
  }

  if (matches.length >= range1 && matches.length <= range2)
    validPasswords1.push(matches);
}

console.log("The answer is: " + validPasswords1.length);

//Part 2
let validPasswords2 = [];

for (let i = 0; i < inputList.length; i++) {
  let rangeItem = inputList[i][0];
  let stringRange = rangeItem.split("-");
  let numberRange = [];

  for (let i = 0; i < stringRange.length; i++) {
    numberRange.push(parseInt(stringRange[i], 10));
  }

  let [range1, range2] = numberRange;

  let letter = inputList[i][1].split(":");
  letter.pop();

  let password = inputList[i][2].split("");

  switch (true) {
    case password[range1 - 1] == letter && password[range2 - 1] != letter:
      validPasswords2.push(password);
      console.log("Case 1 is a match!");
      break;
    case password[range1 - 1] != letter && password[range2 - 1] == letter:
      validPasswords2.push(password);
      console.log("Case 2 is a match!");
      break;
  }
}

console.log("The second answer is: " + validPasswords2.length);
