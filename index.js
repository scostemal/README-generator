const inquirer = require("inquirer");
const generateMarkdown = require("./utilities/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:"
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: [
      "Apache License 2.0",
      "GPL 3.0",
      "MIT",
      "ISC",
      "Unlicense"
    ]
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the guidelines for contributing to your project?"
  },
  {
    type: "input",
    name: "tests",
    message: "What are the steps to run tests on your project?"
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:"
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:"
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully generated your README.md!");
  });
}

function init() {
  inquirer
  .prompt(questions)
  .then(function(answers) {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  });
}

init();
