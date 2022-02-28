// TODO: Include packages needed for this application
// Internal & External modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        name: "title",
        message: "What is the title of the project?",
        type: "input",
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

// Licenses choice
const licenses = [
    {
      name: "Apache License 2.0",
      value: {
        title: "Apache License 2.0",
        licenseBadge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
        badgeLink: "https://opensource.org/licenses/Apache-2.0",
      },
    },
    {
      name: "GNU General Public License v3.0",
      value: {
        title: "GNU General Public License v3.0",
        licenseBadge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        licenseLink: "https://www.gnu.org/licenses/gpl-3.0",
      },
    },
    {
      name: 'BSD 2-Clause "Simplified" License',
      value: {
        title: 'BSD 2-Clause "Simplified" License',
        licenseBadge:
          "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
        licenseUrl: "https://opensource.org/licenses/BSD-2-Clause",
      },
    },
    {
      name: 'BSD 3-Clause "New" or "Revised" License',
      value: {
        title: 'BSD 3-Clause "New" or "Revised" License',
        licenseBadge:
          "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
        licenseUrl: "(https://opensource.org/licenses/BSD-3-Clause",
      },
    },
    {
      name: "Boost Software License 1.0",
      value: {
        title: "Boost Software License 1.0",
        licenseBadge:
          "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
        licenseLink: "https://www.boost.org/LICENSE_1_0.txt",
      },
    },
    {
      name: "Eclipse Public License 1.0",
      value: {
        title: "Eclipse Public License 1.0",
        licenseBadge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
        licenseLink: "https://opensource.org/licenses/EPL-1.0",
      },
    },
];

// TODO: Create a function to write README file
function saveToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) =>
    error
        ? console.log("There was an error: " + error)
        : console.log("Markdown generated")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        saveToFile("README.md", responses);
    });
}

// Function call to initialize app
init();
