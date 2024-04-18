#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.magenta("\n\tWelcome to my Word Count Application\n\t"));

const Answers :{
    Sentence : string
} = await inquirer.prompt([{
    name : "Sentence",
    message: (chalk.cyan("\nEnter your sentence to count the word: ")),
    type: "input"
}])

const wordcount = Answers.Sentence.trim().split(" ");

console.log(wordcount)
console.log(chalk.cyan(`\nYour Sentence has ${wordcount.length} words`));

