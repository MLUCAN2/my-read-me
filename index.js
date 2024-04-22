
// We're using FS to create the file
const fs= require('fs');
// We're using the inquirer library to create command line prompts that a user can go through to tell the FS what to include or exclude from the file. 
const inquirer= require ('inquirer');

let standardReadMe= '';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter your project title (no-spaces)',
        },
        {
            type: 'confirm',
            name: 'addDescription',
            message: 'Would you like to add a description?',
            default: false,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your description',
            when: function (response) {
                return response.addDescription;
            },
        },
        {
            type: 'confirm',
            name: 'addTableOfContents',
            message: 'Would you like to add a table of contents?',
            default: false,
        },
        {
            type: 'confirm',
            name: 'addInstallation',
            message: 'Would you like to add an installation section?',
            default: false,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter your installation information.',
            when: function (response) {
                return response.addInstallation;
            }
        },
        {
            type: 'confirm',
            name: 'addUsage',
            message: 'Would you like to add a usage section?',
            default: false, 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter your usage information.',
            when: function (response) {
                return response.addUsage;
            }
        },
        {
            type: 'confirm',
            name: 'addCredits',
            message: 'Would you like to add a credits section?',
            default: false,
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please enter your credits information.',
            when: function (response) {
                return response.addCredits;
            }
        },
        {
            type: 'list',
            name: 'addLicense',
            message: 'Add your license and badge.',
            choices: ['Apache', 'MIT', 'none'],
            default: 'none',
        },
        {
            type: 'confirm',
            name: 'addFeatures',
            message: 'Would you like to add a features section?',
            default: true,
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please enter your features information.',
            when: function (response) {
                return response.addFeatures;
            }
        },
        {
            type: 'confirm',
            name: 'addHowToContribute',
            message: 'Would you like to add a how to contribute section?',
            default: true,
        },
        {
            type: 'input',
            name: 'howToContribute',
            message: 'Please enter your how to contribute information.',
            when: function (response) {
                return response.addHowToContribute;
            }
        },
        {
            type: 'confirm',
            name: 'addTests',
            message: 'Would you like to add a tests section?',
            default: true,
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter your tests information.',
            when: function (response) {
                return response.addTests;
            }
        },
        {
            type: 'confirm',
            name: 'addQuestions',
            message: 'Would you like to add a questions section that includes your contact info?',
            default: true,
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your GitHub username',
            when: function (response) {
                return response.addQuestions;
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your GitHub username',
            when: function (response) {
                return response.addQuestions;
        }
        ,}

    ])
    
    // This is the content of the README file

    .then((response)=>{
        let standardReadMe=  `# ${response.projectTitle}\n\n`

        if (response.addDescription){
            standardReadMe+= '## Description\n\n'
            standardReadMe+= `${response.description}\n\n`
            
        };
        if (response.addTableOfContents){
            standardReadMe+= '## Table of Contents\n\n'
            if (response.addDescription){
                standardReadMe+= '- [Description](#description)\n'   
            }
            if (response.addInstallation){
                standardReadMe+= '- [Installation](#installation)\n'   
            }
            if (response.addUsage){
                standardReadMe+= '- [Usage](#usage)\n'   
            }
            if (response.addCredits){
                standardReadMe+= '- [Credits](#credits)\n'  
            }
            if (response.addLicense){
                standardReadMe+= '- [License](#license)\n'  
            }
            if (response.addFeatures){
                standardReadMe+= '- [Features](#features)\n'  
            }
            if (response.addHowToContribute){
                standardReadMe+= '- [How to Contribute](#how-to-contribute)\n'
            }
            if (response.addTests){
                standardReadMe+= '- [Tests](#tests)\n'  
            }
            if (response.addQuestions){
                standardReadMe+= '- [References](#references)\n'
            }
         
        };
        if (response.addInstallation){
            standardReadMe+= '## Installation\n\n'
            standardReadMe+= `${response.installation}\n\n`
        };
        if (response.addUsage){
            standardReadMe+= '## Usage\n\n'
            standardReadMe+= `${response.usage}\n\n`
        };
        if (response.addCredits){
            standardReadMe+= '## Credits\n\n'
            standardReadMe+= `${response.credits}\n\n`
        };
        if (response.addLicense){
            standardReadMe+= '## License\n\n';
            if (response.addLicense != 'none','MIT') {
                standardReadMe+= `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`
            }
            else if (response.addLicense != 'none', 'Apache'){
                standardReadMe+= `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`
            }
            else if (response.addLicense != 'MIT', 'Apache'){
                standardReadMe+= 'No license\n\n'
            };
        };
        if (response.addFeatures){
            standardReadMe+= '## Features\n\n'
            standardReadMe+= `${response.features}\n\n`
        };
        if (response.addHowToContribute){
            standardReadMe+= '## How to Contribute\n\n'
            standardReadMe+= `${response.howToContribute}\n\n`
        };
        if (response.addTests){
            standardReadMe+= '## Tests\n\n'
            standardReadMe+= `${response.tests}\n\n`
        };
        if (response.addQuestions){
            standardReadMe+= '## References\n\n',
            standardReadMe+= `For any questions please contact me at myronlucan@gmail.com and don't forget to check out my repository: ${response.questions}`
        };

// Function to write the README file
        fs.writeFile(`README2.md`, standardReadMe, (err) =>
            err ? console.error('Could not write to file', err) : console.log ('Success')
    );
    })
    

