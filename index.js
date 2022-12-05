// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Whats the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a brief explanation of your application?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps to get your project installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do you run your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who worked on this project?",
        name: "credits"
    },
    {
        type: "list",
        message: "What license is needed for this project?",
        name: "license",
        choices: ["MIT", "Apache", "Boost", "BDS 3-Clause", "None"]
    },
    {
        type: "input",
        message: "What is your email?",
        name: "questions"
    },
    {
        type: "input",
        message: "How did you test your application?",
        name: "test"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(data),
            err ? console.log(err) : console.log("README file created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data))
            console.log(data)
        })
}

// Function call to initialize app
init();
