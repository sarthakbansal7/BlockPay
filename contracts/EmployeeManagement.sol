pragma solidity ^0.8.0;
import "contracts/FinanceManagement.sol";

contract EmployeeManagement {
    FinanceManagement financeManagement;

    constructor(FinanceManagement _financeManagement) {
        financeManagement = _financeManagement;
    }

    struct Employee {
        address payable account;
        uint salary;
        uint payStartDate;
        uint payEndDate;
    }

    mapping(address => Employee) public employees;
    address[] public employeeAddress;

    event EmployeeAdded(address employee);
    event EmployeeRemoved(address employee);
    event EmployeeUpdated(address employee);

    function addEmployee(address payable account, uint salary, uint payStartDate, uint payEndDate) public {
        employees[account] = Employee(account, salary, payStartDate, payEndDate);
        employeeAddress.push(account);
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

    function payAllEmployees() public  {
        for(uint i = 0 ; i < employeeAddress.length ; i++) {
            address payable empAccount = payable(employeeAddress[i]);
            financeManagement.transferAmount(empAccount, employees[empAccount].salary);
        }
    }
}
