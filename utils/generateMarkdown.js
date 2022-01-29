// object containing data about each license such as their link and the code name for the badge
const licenseObj = {
  "Apache license 2.0": 
    {
      'link': "https://opensource.org/licenses/Apache-2.0",
      'code': 'Apache_2.0'
    },

  'Boost Software License 1.0':
    {
      'link': "https://www.boost.org/LICENSE_1_0.txt",
      'code': 'Boost_1.0'
    }, 
  
  'BSD 2-clause "Simplified" license': 
  {
    'link': 'https://opensource.org/licenses/BSD-2-Clause',
    'code': 'BSD_2--Clause'
  },
  
  'BSD 3-clause "New" or "Revised" license': 
  {
    'link': 'https://opensource.org/licenses/BSD-3-Clause',
    'code': 'BSD_3--Clause'
  },
  
  'Eclipse Public License 2.0': 
  {
    'link': 'https://opensource.org/licenses/EPL-2.0',
    'code': 'AGPL_v3'
  },
  
  'GNU Affero General Public License v3.0': 
  {
    'link': 'https://www.gnu.org/licenses/agpl-3.0',
    'code': 'EPL_2.0'
  },

  'GNU General Public License v2.0': 
  {
    'link': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'code': 'GPL_v2'
  },
  'GNU General Public License v3.0': 
  {
    'link': 'https://www.gnu.org/licenses/gpl-3.0',
    'code': 'GPL_v3'
  },
  'GNU Lesser General Public License v2.1':
  {
    'link': 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html',
    'code': 'LGPL_v2.1'
  },
  'GNU Lesser General Public License v3.0': 
  {
    'link': 'https://www.gnu.org/licenses/lgpl-3.0',
    'code': 'LGPL_v3'
  },
  'MIT':
  {
    'link': 'https://opensource.org/licenses/MIT',
    'code': 'MIT'
  },
  'Mozilla Public License 2.0': 
  {
    'link': 'https://opensource.org/licenses/MPL-2.0',
    'code': 'MPL_2.0'
  },
  'The Unlicense':
  {
    'link': 'http://unlicense.org/',
    'code': 'Unlicense'
  },
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // since license is an array, check if its empty or not
  // if empty or length is 0, then return empty string, else reference the license object
  if(license.length === 0) {
    return "";
  } 

   return `[![License](https://img.shields.io/badge/License-${licenseObj[license].code}-blue.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // since license is an array, check if its empty or not
  // if empty or length is 0, then return empty string, else reference the license object
  if(license.length === 0) {
    return "";
  } else {
    return `(${licenseObj[license].link})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // since license is an array, check if its empty or not
  // if empty or length is 0, then return empty string, else return a a string
  if(license.length === 0) {
    return "";
  } else {
    return `This project is licensed under the terms of the ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {  

    // returns an array of license names
    // data.license when empty returns a emtpy array []
    const section = renderLicenseSection(data.license);
    const link = renderLicenseLink(data.license);
    const badge = renderLicenseBadge(data.license);

    return `# ${data.title}

    ${link}${badge}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- ${data.description}

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [How to Contribute](#contribute)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

Add image relative path within ()

Example: ![alt text](assets/images/screenshot.png)

## Tests

${data.test}

## Contribute

${data.contribution}

## License

${section}

## Questions
Contact me for any further questions: 

1. [Github profile](https://github.com/${data.username}/)
2. Email: ${data.email}
`;
}

module.exports = generateMarkdown;
