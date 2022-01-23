# <Good-Readme-Generator>

## Table of Contents
​
- [Description](#description)
- [Authors](#authors)
- [Deployed Link](#deployed-Link)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribute)
- [Resources](#resources)

### Description

Instead of wasting time writing yourself a readme from scratch, this application provides users with a quick alternative to build a professional readme in half the time. This application works by automatically generate a professional readme.md for users by utilizing back-end features such as node.js and NPM. Users will be prompted to answer a few quick questions about the content of the readme and the application will use that given information to generate a readme so that users can spend more time on their project or application. Based on the information provided when the user was prompted, the readme file will then be populated with that information. 

This project taught be the fundamentals of using node and NPM to create an aplication without using the browser that can read, write, or edit files. I learned to use node.js to write files from scratch using the writeFile() method and how to use packages from npm such as inquirer to prompt questions for the user. A issue I encounterd while building this project was on fully understanding how inquirer worked, how the data was returned, and how the process that information. This was solved by reading the documentation on inquirer and noticing that the data can be accesssed in a promise that will then run the generateMarkdown function that was exported from generateMarkdown.js. Once I understood this, the application was built with little effort. In the future, I hope to possiby look into more npm packages and see if those features can be used to style the readme more. Such as adding images, icons, styling, and more to make a more professional readme.

The application will be invoked by using the following command:

```bash
node index.js
```

## Author 
- Takara Truong

## Deployed Link

fdsfsd

## Installation

To install this application, clone the necessary files in the github repository. Once done, open up the terminal in the index.js file where you will enter npm install. This will in stall the necessary packages needed to run this application. 
## Usage

In your index,js terminal, enter node index.js to run the application.
## Contribute


## Resources 

* https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide 
* https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 
* https://www.npmjs.com/package/inquirer#prompt 
