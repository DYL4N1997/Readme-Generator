// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.license)}


  # Description
  ${data.description}


  # Table of Contents
  - [Install](#install)
  - [usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)


  # Installation
  Guide on how to install this project run in your own local environment:
  ${data.install}


  # Usage
  ${data.usage}


  # Contribution
  ${data.contrbution}


  # Testing
  ${data.testing}


  # License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}


  # Questions
  If you have any questions about this project please feel free to email me @ ${
    data.email}. You can also view more of my projects here https://www.github.com/${
    data.github}


  # Email
  ${data.email}

`;
}


