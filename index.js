// TODO: Include packages needed for this application
// We're using FS to create the file
const fs= require('fs');
// We're using the inquirer library to create command line prompts that a user can go through to tell the FS what to include or exclude from the file. 
const inquirer= require ('inquirer');
const { type } = require('os');

// TODO: Create an array of questions for user input
// I will be doing this based on what we learned in class
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
            type: 'confirm',
            name: 'addUsage',
            message: 'Would you like to add a usage section?',
            default: false, 
        },
        {
            type: 'confirm',
            name: 'addCredits',
            message: 'Would you like to add a credits section?',
            default: false,
        },
        {
            type: 'confirm',
            name: 'addLicense',
            message: 'Would you like to add a license section?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'addFeatures',
            message: 'Would you like to add a features section?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'addHowToContribute',
            message: 'Would you like to add a how to contribute section?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'addTests',
            message: 'Would you like to add a tests section?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'addReferences',
            message: 'Would you like to add a reference link on how to build a professional README?',
            default: true,
        },

    ])
    
    // This is the content of the README file
    .then((response)=>{
        let standardReadMe=  `# ${response.projectTitle}#\n\n`

        if (response.addDescription){
            standardReadMe+= '## Description\n\n'
            standardReadMe+= `${response.description}\n\n`
        };
        if (response.addTableOfContents){
            standardReadMe+= '## Table of Contents\n\n'
        };
        if (response.addInstallation){
            standardReadMe+= '## Installation\n\n'
        };
        if (response.addUsage){
            standardReadMe+= '## Usage\n\n'
        };
        if (response.addCredits){
            standardReadMe+= '## Credits\n\n'
        };
        if (response.addLicense){
            standardReadMe+= '## License\n\n'
        };
        if (response.addBadges){
            standardReadMe+= '## Badges\n\n'
        };
        if (response.addFeatures){
            standardReadMe+= '## Features\n\n'
        };
        if (response.addHowToContribute){
            standardReadMe+= '## How to Contribute\n\n'
        };
        if (response.addTests){
            standardReadMe+= '## Tests\n\n'
        };
        if (response.addReferences){
            standardReadMe+= '## References\n\n'
        };

// TODO: Create a function to write README file
        fs.writeFile(`README2.md`, standardReadMe, (err) =>
            err ? console.error('Could not write to file', err) : console.log ('Success')
    );
    })
    

