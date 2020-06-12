USE employeeTracker_db;

INSERT INTO department (name)
VALUES ("Accounting")
, ("Marketing")
, ("Sales")
, ("Services");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Smith", 1, 1)
, ("Kim", "Klam", 2, 2)
, ("Mike", "Mason", 3, NULL)
, ("Tim", "Torez", 4, NULL)
, ("Craig", "Chavis", 5, NULL)
, ("Robert", "Riddle", 7, NULL)

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 100000, 1)
, ("Marketing Analyst", 75000, 2)
, ("Marketing Consultant", 85000, 3)
, ("Sales Executive", 60000, 4)
, ("ServiceManager", 90000, 5)
