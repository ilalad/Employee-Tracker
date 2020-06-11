var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var PORT = process.env.PORT || 8080;
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    //  port
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "satnaam10111",
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
            "Add Role",
            "Add Employee",

            "Update Employee Role",

            "View Departments",
            "View Roles",
            "View Employees",

            "Exit"
        ]

    })
        .then(function (answer) {
            console.log(answer.action);
            switch (answer.action) {
                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;


                case "View All Departments":
                    departmentsTable();
                    break;
                case "View All Roles":
                    rolesTable();
                    break;
                case "View All Employees":
                    employeesTable();
                    break;

                case "Update Employee Roles":
                    updateRole();
                    break;


                case "Exit":
                    connection.end();
                    break;

            }
        });
}

function addDepartment() {
    connection.query([

        {
            type: "input",
            message: "Enter name of the Department",
            name: "department"
        }
    ])
        .then(function (answer) {

            "INSERT INTO department SET ?",
            {
                name: answer.name,

            }
            start();
        })
    function addRole() {
        inquirer.prompt({
            type: "input",
            message: "What is the Role",
            name: "role"
        })
            .then(function (answer) {
                start();
            })
    }

    function addEmployee() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter Employee Name ",
                name: "employee",
            }
        ])
            .then(function (answer) {
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        role_id: answer.role_id,
                        manager_id: answer.manager_id,

                    })
                start();
            })
    }


    //   * View departments, roles, employees

    function departmentsTable() {
        inquirer.prompt([
            {
                type: "input",
                message: "View All Departments",
                name: "departmentsTable",
            }
        ])
            .then(function (answer) {
                start();
            })
    }

    function rolesTable() {
        inquirer.prompt([
            {
                type: "input",
                message: "View All Roles",
                name: "rolesTable",
            }
        ])
            .then(function (answer) {
                start();
            })
    }

    function employeesTable() {
        inquirer.prompt([
            {
                type: "input",
                message: "View All Employees",
                name: "employeesTable",
            }
        ])
            .then(function (answer) {
                start();
            })
    }

    //   * Update employee roles

    function updateRole() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter Employee Role to Update",
                name: "updateRole",
            }
        ])
            .then(function (answer) {
                start();
            })
    }
}