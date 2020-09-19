const inquirer = require(inquirer);
const fs = require(fs);

// array of questions for user
// const questions = [

// ];

inquirer
.prompt([
    {
        message: 'Welcome to ReadMe Generator! What is the title of your project?',
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
        message:'Enter your license', //need to put choices here? like license options and then they choose
        name: 'license',
    },
    {
        message:'Enter your contribution guidelines',
        name: 'contribution',
    },
    {
        message:'Enter your test instructions',
        name: 'test',
    },
    {
        message:'Almost done! What is your GitHub username?',
        name: 'github',
    },
    {
        message:'What is your email address? (if you do not wish to include email, please enter "none")',
        name: 'email',
    },
    {
        message:'Last Question! Are there any instructions you want to give potential clients for how to contact you? (if not, please enter "none)',
        name: 'instructions',
    },
])
.then(answers => {

    const {title, description, tableOfContents, installation, usage, license, contribution, test, github, email, instructions} = answers;

    let doc = `#${title} \n
    
    
    `;

              
    fs.writeFile('readme.md', doc, function(err){
        if (err) {
            return console.log(err);
        } else {
            console.log("file complete!")
        }
    })


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
