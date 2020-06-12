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
    inquirer.prompt([

        {
            type: "input",
            message: "Enter name of the Department",
            name: "department"
        },
        {
            type: "input",
            message: "Enter id",
            name: "id"
        }
    ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO department SET ?",
                [
                    {
                        name: answer.department,
                        id: answer.id,
                    }
                ],
                function (error) {
                    if (error) throw error;
                    console.log('Department Added Successfully');
                    start();
                });

        })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Role",
            name: "role"
        },
        {
            type: "input",
            message: "Enter role id",
            name: "role_id"
        },
        {
            type: "input",
            message: "Enter total salary",
            name: "salary"
        },
        {
            type: "input",
            message: "Enter Department id",
            name: "department_id"
        }

    ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO role SET ?",
                [
                    {
                        title: answer.role,
                        id: answer.role_id,
                        salary: answer.salary,
                        department_id: answer.department_id


                    }

                ],
                function (error) {
                    if (error) throw error;
                    console.log('Role Added Successfully');
                    start();
                })
        })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter first name ",
            name: "first_name",

        },
        {
            type: "input",
            message: "Enter last name ",
            name: "last_name",

        },
        {
            type: "input",
            message: "Enter role id ",
            name: "role_id",

        },
        {
            type: "input",
            message: "Enter Manager id ",
            name: "manager_id",

        }



    ])
        .then(function (answer) {
            console.log(answer);
            connection.query(
                "INSERT INTO employee SET ?",
                [
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        role_id: answer.role_id,
                        manager_id: answer.manager_id
                    }
                ],
                function (error) {
                    if (error) throw error;
                    console.log('Employee Added Successfully');

                    start();
                })
        })

}
//   * View departments, roles, employees

function departmentsTable() {
    connection.query(
        `
                SELECT employee.id, first_name, last_name, title, salary, department_name
                FROM employee
                LEFT JOIN role ON role_id = role.id
                LEFT JOIN department ON department_id  = department.id 
                ORDER BY department.department_name;
                `
        , function (err, res) {
            if (err) throw err;
            var allDepartments = cTable.getTable(res);
            console.log(allDepartments);
            start();
        }
    )
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
            connection.query(
                `SELECT employee.id, first_name, last_name, title, salary, department_name
                    FROM employee
                        LEFT JOIN role ON role_id = role.id`
                , function (err, res) {
                    if (err) throw err;
                    var allRoles = cTable.getTable(res);
                    console.log(allRoles);

                    start();
                })
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
            connection.query(
                `SELECT employee.id, first_name, last_name, title, salary, department_name
                    FROM employee
                        LEFT JOIN role ON role_id = role.id
                        LEFT JOIN department ON department_id  = department.id 
                    ORDER BY employee.id`
                , function (err, res) {
                    if (err) throw err;
                    var allEmployees = cTable.getTable(res);
                    console.log(allEmployees);

                    start();
                })
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
            // connection.query(
            //     "UPDATE role SET ? WHERE ?",
            //     [
            //         {
            //           title, salary, department_id 
            //         }
            //     ]
            // )


            start();
        })
}
