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

        uint index = findIndex(account);

        if (index < employeeAddress.length) {
            employeeAddress[index] = employeeAddress[employeeAddress.length - 1];
            employeeAddress.pop();
        }

        emit EmployeeRemoved(account);
    }

    function findIndex(address account) private view returns (uint) {
        for (uint i = 0 ; i < employeeAddress.length ; i++) {
            if (employeeAddress[i] == account) {
                return i;
            }
        }

        return employeeAddress.length;
    } 

    function updateEmployee(address account, uint newSalary, uint newPayStartDate, uint newPayEndDate) public {
        Employee storage employee = employees[account];
        employee.salary = newSalary;
        employee.payStartDate = newPayStartDate;
        employee.payEndDate = newPayEndDate;
        emit EmployeeUpdated(account);
    }

    function getEmployeeDetails(address account) public view returns (address, uint, uint, uint) {
        Employee memory emp = employees[account];
        return (emp.account, emp.salary, emp.payStartDate, emp.payEndDate);
    }

    function calculatePay(Employee memory emp) private pure returns (uint) {
        uint workingDays = emp.payEndDate - emp.payStartDate + 1;
        uint scale = 10**18;
        uint amount = (workingDays * scale * emp.salary / 30) ;
        return amount;
    }

    function payAllEmployees() public  {
        for(uint i = 0 ; i < employeeAddress.length ; i++) {
            address payable empAccount = payable(employeeAddress[i]);
            uint empSalary = calculatePay(employees[empAccount]);
            financeManagement.transferAmount(empAccount, empSalary);

            // update start date to 1 of next month
            employees[empAccount].payStartDate = 1;
        }
    }
}
