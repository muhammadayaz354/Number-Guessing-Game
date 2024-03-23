#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const ansewrs = await inquirer.prompt([
  {
    name: "userNumber",
    type: "number",
    message: "please Guess Any Dice Number",
  },
]);

if (ansewrs.userNumber === randomNumber) {
  console.log("Congratulations Buddy!.. You Guess A Right Number");
} else {
  console.log("Oops!....sorry Buddy You Guess A Wrong Number");
}
