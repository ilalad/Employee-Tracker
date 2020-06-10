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

            "Remove Employee",
            "Update Employee",
            "Update Employee Role",
            "Update Employee Managers",

            "View Departments",
            "View Employees",
            "View Employees by Department",
            "View Employees by Manager",
            "View Roles",


            "Exit"
        ]

    })
        .then(function (answer) {
            console.log(answer.action);
            switch (answer.action) {
                case "Add Department":
                    addDepartment();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Remove Department":
                    removeDepartment();
                    break;
                case "Remove Role":
                    removeRole();
                    break;

                case "Update Employee":
                    updateEmployee();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                case "Update Employee Managers":
                    updateManagers();
                    break;


                case "View All Departments":
                    departmentsTable();
                    break;
                case "View All Employees":
                    employeesTable();
                    break;
                case "View Employees by Department":
                    employeesByDept();
                    break;
                case "View Employees by Manager":
                    employeesByManager();
                    break;
                case "View All Roles":
                    rolesTable();
                    break;

                case "Exit":
                    connection.end();
                    break;

            }
        });
}

function addDepartment() {
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


//   * Delete departments, roles, and employees

function removeEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Remove Employee ",
            name: "employee",
        }
    ])
        .then(function (answer) {
            start();
        })
}
function removeDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "Remove Department ",
            name: "removeDepartment",
        }
    ])
        .then(function (answer) {
            start();
        })
}
function removeRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Remove Role ",
            name: "removeRole",
        }
    ])
        .then(function (answer) {
            start();
        })
}

//   * Update employee roles

function updateEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Update Employee ",
            name: "updateEmployee",
        }
    ])
        .then(function (answer) {
            start();
        })
}
function updateRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Update Employee Role",
            name: "updateRole",
        }
    ])
        .then(function (answer) {
            start();
        })
}
//   * Update employee managers

function updateManagers() {
    inquirer.prompt([
        {
            type: "input",
            message: "Update Employee Managers",
            name: "updateManagers",
        }
    ])
        .then(function (answer) {
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
function employeesByDept() {
    inquirer.prompt([
        {
            type: "input",
            message: "View Employees By Department",
            name: "employeesByDept",
        }
    ])
        .then(function (answer) {
            start();
        })
}

//   * View employees by manager

function employeesByManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "View Employees By Manager",
            name: "employeesByManager",
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