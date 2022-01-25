// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'How would someone be able to contribute to this application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you test the application to confirm it works?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to choose for this application?',
        choices: ['Apache license 2.0','Boost Software License 1.0','BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU General Public License v3.0','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0', 'MIT','Mozilla Public License 2.0','The Unlicense']
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const hello = generateMarkdown(data);
    fs.writeFileSync(`${fileName}.md`, hello);
}

// TODO: Create a function to initialize app
function init() {
    // initiate the user prompt questions
    inquirer
        .prompt(questions)
            .then(ans => writeToFile('Readme', ans))
            .then(() => { console.log('file written!')})
            // catch error if error is made
            .catch(err => console.error(err))
}

// Function call to initialize app
init();
