// TODO: Include packages needed for this application
// Internal & External modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: (input) => {
            if (!input) {
                return "Title of project is required";
            }
            return true;
        
        },
    },
        // Project Description
    {
        type: "input",
        name: "description",
        message: "Describe the project",
        validate: (input) => {
            if (!input) {
                return "Description is required";
            }
            return true;
        },
    },
        // Technologies used
    {
        type: "checkbox",
        name: "technologies",
        message: "Select the technologies used",
        choices: ["HTML", "CSS", "Javascript", "Node.JS"],
    },
    // Install guidelines
    {
        type: "input",
        name: "install",
        message: "Enter install guidelines",
        validate: (input) => {
            if (!input) {
                return "Provide install guidelines"
            }
            return true;
        },
    },
      // usage information
    {
        type: "input",
        name: "usage",
        message: "Provide usage information",
        validate: (input) => {
            if (!input) {
                return "Usage information required";
                }
            return true;
        },
    },
    // contribution
    {
        type: "input",
        name: "contribution",
        message: "Describe contribution guidelines",
        validate: (input) => {
            if (!input) {
                return "please describe contribution guidelines";
                }
            return true;
        },
    },
    // testing guidelines
    {
        type: "input",
        name: "testing",
        message: "Denote test guidelines",
        validate: (input) => {
            if (!input) {
                return "please provide the test guidelines";
                }
            return true;
        },
    },
    // license
    {
        type: "list",
        name: "license",
        message: "select a license",
        choices: licenses,
    },
  // github username
    {
        type: "input",
        name: "github",
        message: "Enter Github username",
        validate: (input) => {
            if (!input) {
                return "please enter your github username";
                }
            return true;
        },
    },
    // github repository
    {
        type: "input",
        name: "repo",
        message: "Enter Github repo",
        validate: (input) => {
            if (!input) {
                return "please enter your github repo";
                }
            return true;
        },
    },
    // github email
    {
        type: "input",
        name: "email",
        message: "Enter email address",
        validate: (input) => {
            if (!input) {
                return "please enter a valid email address";
                }
        return true;
        },
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
