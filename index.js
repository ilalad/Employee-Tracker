var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    //  port
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// allow the user to: Add departments, roles, employees

function start() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Add Employee",
            "Add Role",
            "Exit"
        ]

    })
        .then(function (answer) {
            console.log(answer.action);
            switch (answer.action) {
                case "Add Department":
                    addDept();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}
function addDept() {
    inquirer.prompt([

        {
            type: "input",
            message: "Add Department",
            name: "department"
        }
    ])
        .then(function (answer) {

            start();
        })

}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Add Employee ",
            name: "employee",
        }
    ])
        .then(function (answer) {
            start();
        })
}

function addRole() {
    inquirer.prompt({
        type: "input",
        message: "Add Role",
        name: "role"
    })
        .then(function (answer) {
            start();
        })
}




//   * View departments, roles, employees

//   * Update employee roles

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- 
// ie the combined salaries of all employees in that department -->