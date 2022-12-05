// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licensePicked = data.license;

  let licenseBadge = "";

  if (licensePicked === "MIT") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  }
  if (licensePicked === "Apache") {
    licenseBadge =
"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return licenseBadge;
  }
  if (licensePicked === "Boost") {
    licenseBadge =
"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    return licenseBadge;
  }
  if (licensePicked === "BDS 3-Clause") {
    licenseBadge =
"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    return licenseBadge;
  } if (licensePicked === 'None') {
    return licenseBadge;
  }

}

const renderLicenseTableOfContents = (data) => {
  const licensePicked = data.license;

  if (licensePicked === 'None') {
    return "";

  } else {
    return "* [License](#license)";
  }
};

function renderLicenseSection(data) {
  const licensePicked = data.license;

  if (licensePicked === 'None') {
    return "";

  } else {
    return `## License
${renderLicenseBadge(data)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseTableOfContents(data)}
* [Questions](#questions)
* [Test](#test)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data)}

## Questions
${data.questions}

## Test
${data.test}
`;

}




module.exports = generateMarkdown;
