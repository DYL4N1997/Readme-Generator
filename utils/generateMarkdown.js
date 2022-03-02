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
  ${data.contribution}


  # Testing
  ${data.testing}


  # License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}


  # Questions
  If you have any questions about this project please feel free to email me @ ${
    data.email}. You can also view more of my projects here https://www.github.com/${
    data.github}


  # Email
  ${data.email}

`;
};

// Generate Markdown Function
const renderLicenseBadge = (license) => {
  if (license === "Empty") {
    return "";
  } else {
    return `![License](${license.licenseBadge})`;
  }
};

const renderLicenseLink = (license) => {
  if (license === "Empty") {
    return "";
  } else {
    return `${license.licenseLink}`;
  }
};

function renderLicenseSection(license) {
  if (license === "Empty") {
    return `License requires selecting`;
  } else {
    console.log(license);
    return ` 
    
  Click on the link for ${license.title}. For more information on the license: `;
  }
}


module.exports = generateMarkdown;
