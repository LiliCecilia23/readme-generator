const inquirer = require(inquirer);
const fs = require(fs);

// array of questions for user
// const questions = [

// ];

inquirer
.prompt([
    {
        message: 'Welcome to ReadMe Generator! What is the title of your app?',
        name: 'title',
    },
    {
        message:'What is the description?',
        name: 'description',
    },
    {
        message:'Enter your table of contents',
        name: 'tableOfContents',
    },
    {
        message:'Enter your installation instructions',
        name: 'installation',
    },
    {
        message:'Enter your usage instructions',
        name: 'usage',
    },
    {
        message:'Enter your license',
        name: 'license',
    },
    {
        message:'What is your title?',
        name: 'What is your title?',
    },
    {
        message:'What is your title?',
        name: '',
    },
])


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
