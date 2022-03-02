// Internal & External modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
        licenseLink: "https://opensource.org/licenses/BSD-2-Clause",
      },
    },
    {
      name: 'BSD 3-Clause "New" or "Revised" License',
      value: {
        title: 'BSD 3-Clause "New" or "Revised" License',
        licenseBadge:
          "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
        licenseLink: "(https://opensource.org/licenses/BSD-3-Clause",
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


// Questions
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
        name: "description",
        message: "Describe the project",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "Description is required";
            }
            return true;
        },
    },
    // Install guidelines
    {
        name: "install",
        message: "Enter install guidelines",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "Provide install guidelines"
            }
            return true;
        },
    },
      // usage information
    {
        name: "usage",
        message: "Provide usage information",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "Usage information required";
                }
            return true;
        },
    },
    // contribution
    {
        name: "contribution",
        message: "Describe contribution guidelines",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "please describe contribution guidelines";
                }
            return true;
        },
    },
    // testing guidelines
    {
        name: "testing",
        message: "Denote test guidelines",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "please provide the test guidelines";
                }
            return true;
        },
    },
    // license
    {
        name: "license",
        message: "select a license",
        type: "list",
        choices: licenses,
    },
  // github username
    {
        name: "github",
        message: "Enter Github username",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "please enter your github username";
                }
            return true;
        },
    },
    // github repository
    {
        name: "repo",
        message: "Enter Github repo",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "please enter your github repo";
                }
            return true;
        },
    },
    // github email
    {
        name: "email",
        message: "Enter email address",
        type: "input",
        validate: (input) => {
            if (!input) {
                return "please enter a valid email address";
                }
        return true;
        },
    },
];


// TODO: Create a function to write README file
function saveToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => (fileName, generateMarkdown(data))
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        saveToFile("README.md", responses);
    });
}

// Function call to initialize app
init();
