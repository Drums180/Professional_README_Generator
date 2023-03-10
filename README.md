# README using Node.JS <a id="title"></a> 

 [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
    

 ## Description <a id="description"></a> 

 This repository contains a Node.js script that automatically generates a README file for your project. The script takes in various inputs such as project name, description, installation  instructions, and usage information, and then uses that information to generate a well-formatted README file. The generated file provides a clear and concise overview of your project, making it easier for others to understand and contribute. Whether you're starting a new project or simply looking to streamline your existing workflow, this repository is an essential tool for every developer.  
    

 ## Usage <a id="usage"></a> 

 Generating a comprehensive README file can be a time-consuming and labor-intensive task. That's why we've created this Node.js script to make the process much easier. With just a few inputs, you can quickly and easily generate a README file that provides a clear and concise overview of your project. No more spending hours manually formatting and writing up documentation - our script takes care of it all for you. This repository is perfect for busy developers, project managers, and anyone looking to save time and streamline their workflow. With this script, you can focus on what really matters - building great software. So why waste time writing a README file from scratch when you can let our script do the heavy lifting for you? Give it a try today and see the difference it can make! 

 ## Installation <a id="installation"></a> 

 To use the script, simply install Node.js and run the command line interface, following the prompts to input your project information. Try it out today and see how it can simplify your README file creation process! 

 ## Contributing Instructions <a id="contributing"></a> 

 We welcome and encourage contributions to this repository! There are many ways you can help improve this script and make it even better. Here are some general guidelines to follow when contributing: 1. Report issues: If you encounter any bugs or have any suggestions for improvement, please open an issue in the repository's issue tracker. Be sure to provide as much detail as possible, including steps to reproduce the problem if applicable. 2. Submit pull requests: If you have a fix for an issue or a new feature you would like to add, you can submit a pull request. Before submitting a pull request, please make sure you have tested your changes and that they meet the project's coding standards. 3. Follow the project's coding standards: Our project follows a specific set of coding standards, which you can find in the CONTRIBUTING.md file. Please make sure your changes adhere to these standards. 4. Communication: If you have any questions about the repository or the contribution process, feel free to reach out to us via email or through the repository's issue tracker. By following these guidelines, you can help us make this repository even better and ensure your contributions are properly credited. Thank you for your support! 
    

 ## Tests <a id="tests"></a> 

 Testing is an important part of the development process and helps ensure the quality and stability of this repository. Here are some general guidelines for testing this Node.js script: 1. Clone the repository: Clone the repository to your local machine and install the necessary dependencies using npm. 2. Run the script: Run the script using the command line interface and provide the necessary inputs. 3. Verify the output: Verify that the generated README file contains the correct information and is formatted correctly. 4. Test edge cases: Test the script with a variety of inputs, including edge cases such as minimum and maximum values, special characters, and empty inputs. 5. Report bugs: If you encounter any bugs or issues, please report them in the repository's issue tracker. Be sure to include a description of the problem and steps to reproduce it if possible. By following these guidelines, you can help us ensure the quality and stability of this repository. Your contributions and feedback are greatly appreciated! 

 ## Questions <a id="questions"></a> 

 If you have any questions or doubts about how to use this repository, please don't hesitate to reach out to us. Our team is always here to help. You can contact us via email or through our GitHub account. We look forward to hearing from you! 

 **Email:** daviddomor180@hotmail.com 

 **Github Account:** [Drums180](https://github.com/Drums180) 
 
 >>>> README file previously generated by this code
 # Professional README Generator
 
 ## Criteria 1: Command-line application that accepts user input
This code uses the Node.js package inquirer to prompt the user through the command line and ask a series of questions. These questions are designed to gather the necessary information to generate a README file for a project.

The const questions variable is an array of objects, with each object representing a question that the user will be asked. Each object has a type, message, and name property.

The type property specifies the type of prompt that will be used to ask the question. In this code, there are input prompts, which allow the user to type in a response, and a list prompt, which presents the user with a list of options to choose from.

The message property is the text that will be displayed to the user as the prompt for the question.

The name property is the identifier for the user's response to the question. It will be used later on to access the user's input and insert it into the README file.

Once all the questions have been defined, the inquirer.prompt(questions) method is called, passing in the questions array as an argument. This will display the questions to the user in the command line and wait for the user to input their responses.

Once the user has answered all the questions, the inquirer.prompt(questions) method will return an object containing the user's responses. This object can then be used to dynamically generate a README file using a template literal or any other method of your choosing.

```
// Uses inquirer packages in order to prompt the user through command line
const inquirer = require('inquirer');
const fs = require('fs');

// Prompts the next questions in order to generate README file
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
```

## Criteria 2: Generate File
This code uses the responses obtained from the inquirer prompts to create a new README file using a template literal. The response parameter passed to the Start function is an object containing the user's responses to the prompts.

The first part of the code assigns a license badge to the response.licences property based on the user's selection of the license type from the list prompt. This is done using a switch statement, where the corresponding badge link is assigned to response.licences based on the selected license type.

The next part of the code creates a content string using a template literal. This string contains the user's responses to the prompts, which are inserted into the appropriate sections of the README template.

For example, the response.title is used to create a header for the title section, and the response.description is inserted into the description section of the README. The response.email and response.user are also included in the questions section of the README, along with a message inviting the reader to contact the repository owners if they have any questions or issues.

Finally, the fs.writeFile() method is used to create a new README.md file in the current directory and save the content string to it. If an error occurs during the file writing process, the throw err statement will throw an error and stop the program. Otherwise, a message is logged to the console indicating that the file has been saved.

```
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
```
<img width="682" alt="Captura de pantalla 2023-02-15 a la(s) 12 04 45" src="https://user-images.githubusercontent.com/118247139/219114960-3106a22d-f2b5-41c7-996e-44734f9933b4.png">

Walkthrough video 
https://youtu.be/MJ34iEzSIlo
