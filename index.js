// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown')
// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// TODO: Create an array of questions for user input


inquirer
.prompt([
{
    type: 'input',
    name: 'creator',
    message: 'Who created this project?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name');
          return false;
        }
      }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address');
          return false;
        }
      }
},
{ 
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
    validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter your github user name');
          return false;
        }
      }
},
{
//    this must appear as the title 
    type: 'input',
    name: 'title',
    message: 'What is the projects name?',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project name');
          return false;
        }
      }
    
},
{
    type: 'input',
    name: 'description',
    message: 'Please give a description of your project',
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project');
          return false;
        }
      }
},
{
    type: 'input', 
    name: 'installation',
    message: 'Please enter the installation instructions if needed'
},
{
    type: 'input',
    name: 'usage',
    message: 'Not sure how to word this one usageInstructions'
},
{
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to this project?'
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter the test instructions if needed'
},
{
    type: 'list',
   name: 'license',
    message: 'Choose a license for your application',
    choices: ['','',''],
  
  }

// },
// {
//     type: '',
//     name: '',
//     message: ''
// },

// .then(projectData => {
//     portfolioData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//       return promptProject(portfolioData);
//     } else {
//       return portfolioData;
//     }
//   });

])


// .then(data => {
//     const filename = `${data.name
//       .toLowerCase()
//       .split('')
//       .join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), err=>
//       err ? console.log(err)  : console.log('it works!')
//     );
// })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquireResponses => {
        console.log('Readme generated')
        writeToFile('README.md', generateMarkdown({...inquireResponses}));
    });
} 

// Function call to initialize app
// init();

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(readMe => {
//     return writeFile(readMe);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README