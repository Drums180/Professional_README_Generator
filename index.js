// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please insert your Github username: ',
        name: 'user',
    },
    {
        type: 'input',
        message: 'Please insert your email address: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Give a brief description of what is your repository about',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Give a brief instruction on how to install your code',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does this code work and how can the final client use it?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which licences does this project work with?',
        choices: ['MIT', 'GPLv2', 'Apache', 'BSD 3-clause', 'Other'],
        name: 'licences',
    },
    {
        type: 'input',
        message: 'Please insert the contribution guidelines for your repository',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please give detailed instructions on how to test the code in this repository',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function Start (response) {
    switch (response.licences) {
        case "MIT":
            response.licences = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "GPLv2":
            response.licences = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            break;
        case "Apache":
            response.licences = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "BSD 3-clause":
            response.licences = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case "other":
            break;
    }

    const content = `# ${response.title} <a id="title"></a> \n\n ${response.licences}
    \n\n ## Description <a id="description"></a> \n\n ${response.description} 
    \n\n ## Usage <a id="usage"></a> \n\n ${response.usage} \n\n ## Installation <a id="installation"></a> \n\n ${response.installation} \n\n ## Contributing Instructions <a id="contributing"></a> \n\n ${response.contributing} 
    \n\n ## Tests <a id="tests"></a> \n\n ${response.tests} \n\n ## Questions <a id="questions"></a> \n\n If you have any questions or doubts about how to use this repository, please don't hesitate to reach out to us. Our team is always here to help. You can contact us via email or through our GitHub account. We look forward to hearing from you! \n\n **Email:** ${response.email} \n\n **Github Account:** [${response.user}](https://github.com/${response.user}) `
    fs.writeFile('README.md', content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        Start(response);
      });

}

// Function call to initialize app
init();
