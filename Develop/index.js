const inquirer = require('inquirer');
const fs = require('fs');

// questions about the user's project in order to create readMe file
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
        message:'Enter your installation instructions',
        name: 'installation',
    },
    {
        message:'Enter your usage instructions',
        name: 'usage',
    },
    {
        type: 'list',
        message:'Choose a license', 
        name: 'licenseChoice',
        choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        message: 'Enter the year and full name that you want to appear on your license. (format "yyyy First Last")',
        name: 'licenseInfo'
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
        message:'What is your email address?',
        name: 'email',
    },
    {
        message:'Last Question! What instructions do you want to give potential clients for how to contact you?',
        name: 'instructions',
    },
])
.then(answers => {

    // get all of the user's answers from the prompts
    const {title, description, installation, usage, licenseChoice, licenseInfo, contribution, test, github, email, instructions} = answers;

    let license = '';
    let badge = '';

    // possible license choices
    switch (licenseChoice){
        case 'MIT':
            license = `Copyright (c) ${licenseInfo} Licensed under the MIT license.`;
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'GNU GPLv3':
            license = `Copyright (c) ${licenseInfo} Licensed under the GNU GPLv3 license.`;
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'Mozilla Public License 2.0':
            license = `Copyright (c) ${licenseInfo} Licensed under the Mozilla Public License 2.0 license.`;
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'Apache License 2.0':
            license = `Copyright (c) ${licenseInfo} Licensed under the Apache License 2.0 license.`;
            badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Boost Software License 1.0':
            license = `Copyright (c) ${licenseInfo} Licensed under the Boost Software License 1.0 license.`;
            badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'The Unlicense':
            license = `Copyright (c) ${licenseInfo} Licensed under The Unlicense license.`;
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            break;
    };

    // Function to fill markdown file with user's answers
    function generateMarkdown(answers) {
        return `# ${title} ${badge} \n ${description} \n ## Table of Contents \n * [Installation Instructions](#Installation-Instructions) \n * [Instructions for Use](#Instructions-for-Use) \n * [Contribution Guidelines](#Contribution-Guidelines) \n * [Testing Instructions](#Testing-Instructions) \n * [Questions](#Questions) \n * [License](#License) \n ## Installation Instructions \n ${installation} \n ## Instructions for Use \n ${usage} \n ## Contribution Guidelines  \n ${contribution} \n ## Testing Instructions \n ${test} \n ## Questions  \n * Github Username: ${github} \n * Email: ${email} \n * How to contact: ${instructions} \n ## License \n ${license}`;
    }
    
    // Writes a markdown file using user's answers to prompts
    fs.writeFile('SampleREADME.md', generateMarkdown(answers), function(err){
        if (err) {
            return console.log(err);
        } else {
            console.log("file complete!")
        }
    })
});