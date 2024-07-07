pragma solidity ^0.8.0;

contract EmployeeManagement {
    address public owner;

    struct Employee {
        address payable account;
        uint salary;
        uint payStartDate;
        uint payEndDate;
    }

    mapping(address => Employee) public employees;

    event EmployeeAdded(address employee);
    event EmployeeRemoved(address employee);
    event EmployeeUpdated(address employee);

    function addEmployee(address payable account, uint salary, uint payStartDate, uint payEndDate) public {
        employees[account] = Employee(account, salary, payStartDate, payEndDate);
        emit EmployeeAdded(account);
    }

    function removeEmployee(address account) public {
        delete employees[account];
        emit EmployeeRemoved(account);
    }

    function updateEmployee(address account, uint newSalary, uint newPayStartDate, uint newPayEndDate) public {
        Employee storage employee = employees[account];
        employee.salary = newSalary;
        employee.payStartDate = newPayStartDate;
        employee.payEndDate = newPayEndDate;
        emit EmployeeUpdated(account);
    }

    function getEmployeeDetails(address account) public view returns (Employee memory) {
        return employees[account];
    }
}