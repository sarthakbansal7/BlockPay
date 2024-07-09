pragma solidity ^0.8.0;
import "contracts/FinanceManagement.sol";
import "contracts/EmployeeManagement.sol";

contract BlockPay {
    address public owner;
    FinanceManagement public financeManagement;
    EmployeeManagement public employeeManagement;

    constructor() {
        owner = msg.sender;
        financeManagement = new FinanceManagement();
        employeeManagement = new EmployeeManagement(financeManagement);
    }

    // Finance APIs

    function depositFunds() public payable {
        financeManagement.depositFunds{value: msg.value}();
    } 

    function checkBalance() public view returns (uint) {
        return financeManagement.checkBalance();
    }

    // Employee APIs

    function addEmployee(address payable account, uint salary, uint payStartDate, uint payEndDate) public {
        employeeManagement.addEmployee(account, salary, payStartDate, payEndDate);
    }

    function removeEmployee(address account) public {
        employeeManagement.removeEmployee(account);
    }    

    function updateEmployee(address account, uint newSalary, uint newPayStartDate, uint newPayEndDate) public {
        employeeManagement.updateEmployee(account, newSalary, newPayStartDate, newPayEndDate);
    }

    function getEmployeeDetails(address account) public view returns (address, uint, uint, uint) {
        return employeeManagement.getEmployeeDetails(account);
    }

    function payAllEmployees() public  {
        employeeManagement.payAllEmployees();
    }
}