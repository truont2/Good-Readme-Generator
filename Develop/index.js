// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How do you contribute to this application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test the application?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to choose for this application?',
        choices: ['Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0','BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license','BSD 3-clause Clear license','Creative Commons license family','Creative Commons Zero v1.0 Universal','Creative Commons Attribution 4.0','Creative Commons Attribution Share Alike 4.0','Do What The F*ck You Want To Public License','Educational Community License v2.0','Eclipse Public License 1.0','Eclipse Public License 2.0','European Union Public License 1.1','GNU Affero General Public License v3.0','GNU General Public License family','GNU General Public License v2.0','GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c','Microsoft Public License','MIT','Mozilla Public License 2.0','Open Software License 3.0','PostgreSQL License','SIL Open Font License 1.1','University of Illinois/NCSA Open Source License','The Unlicense','zLib License']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'How do you want people to contact you for additional questions?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generateData = ({title, description, installation, usage, contribution, test, license, username, email, contact }) => {
        return `# ${title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- ${description}

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

This project is licensed under the terms of the ${license}.

## Badges

![NPM License](https://img.shields.io/npm/l/:packageName)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## How to Contribute

${contribution}

## Tests

${test}`
    }

    fs.writeFileSync(`${fileName}.md`, generateData(data));
}

// TODO: Create a function to initialize app
function init() {
    // destructure object that is created then run write to file
    inquirer
        .prompt(questions)
            .then(ans => writeToFile('Readmetest', ans))
            .then(() => { console.log('file written!')})
            .catch(err => console.error(err))
}

// Function call to initialize app
init();
