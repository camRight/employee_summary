const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArr = []


function mainMenu() {


    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "list",
                message: "What is your role?",
                choices: ['Manager', 'Intern', 'Engineer'],
                name: "employeeType"
            }
        ])
        .then(data => {


            typeCheck(data)

        })

}


function typeCheck(data) {

    switch (data.employeeType) {
        // i think it can just say manager string in case
        case "Manager":
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your office number?",
                        name: "officeNumber"
                    }
                ])
                .then(managerData => {
                    const newManager = new Manager(data.name, data.id, data.email, managerData.officeNumber)
                    employeeArr.push(newManager)
                    inquirer
                        .prompt([
                            {
                                type: "confirm",
                                message: "Continue creating employees?",
                                name: "exit"
                            }
                        ])
                        .then(response => {
                            if (response.exit) {
                                mainMenu()
                            }
                            else {
                                generateHTML()
                            }
                        })
                  
                })
            break;
        case "Intern":
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What school do you attend currently or in the past?",
                        name: "school"
                    }
                ])
                .then(internData => {
                    const newIntern = new Intern(data.name, data.id, data.email, internData.school)
                    employeeArr.push(newIntern)
                    inquirer
                        .prompt([
                            {
                                type: "confirm",
                                message: "Continue creating employees?",
                                name: "exit"
                            }
                        ])
                        .then(response => {
                            if (response.exit) {
                                mainMenu()
                            }
                            else {
                                generateHTML()
                            }
                        })

                })
            break;
        // employeeType = "Engineer":
        case "Engineer":
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your github username?",
                        name: "github"
                    }
                ])
                .then(engineerData => {
                    const newEngineer = new Engineer(data.name, data.id, data.email, engineerData.github)
                    employeeArr.push(newEngineer)
                    inquirer
                        .prompt([
                            {
                                type: "confirm",
                                message: "Continue creating employees?",
                                name: "exit"
                            }
                        ])
                        .then(response => {
                            if (response.exit) {
                                mainMenu()
                            }
                            else {
                                generateHTML()
                            }
                        })
                })
                break;
    }

}
function generateHTML () {
    const htmlContent = render(employeeArr)
    fs.writeFile(outputPath, htmlContent, function (err) {
        console.log("Success!")
    })
}

mainMenu()



// ask information to get to 
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
