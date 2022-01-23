// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  } 

   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return "";
  } 

  return `(${license})`
    

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  } else {
    return `This project is licensed under the terms of the ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {  
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
    const section = renderLicenseSection(data.license);
    const link = renderLicenseLink(licenseObj[data.license].link);
    const badge = renderLicenseBadge(licenseObj[data.license].code);

    return `# ${data.title}

${badge}${link}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- ${data.description}

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

Add image relative path within ()
![alt text](assets/images/screenshot.png)


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${section}

## How to Contribute

${data.contribution}

## Tests

${data.test}

## Questions

[Github profile] (https://github.com/${data.username}/)
`;


}

module.exports = generateMarkdown;
