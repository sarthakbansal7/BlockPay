// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract decentralizedPayroll{

    struct employee{
        uint id;
        string name;
        uint salary;
        string designation;
        address payable walletAddress;
    }

    employee[] employeeArray;


    address payable owner;


    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }


    constructor(){
        owner = payable(msg.sender);
    }


    event employeeAdded(uint id, string name, uint salary, string designation, address payable walletAddress);
    event employeeRemoved(uint _id, string name, string designation);
    event employeeUpdated(uint id, uint salary, string designation);
    event salaryPaid();
    event fundsDeposited();
    event emergencyWithdrawal();





    function addEmployee(uint _id, string memory _name, uint _salary, string memory _designation, address payable _walletAddress) public onlyOwner {
        employeeArray.push(employee({id: _id, name: _name, salary: _salary, designation: _designation, walletAddress: _walletAddress}));
        emit employeeAdded(_id, _name, _salary, _designation, _walletAddress);
    }



    function removeEmployee(uint _id) public onlyOwner {
        for(uint index = 0; index<employeeArray.length;index++){
            if(employeeArray[index].id == _id){
                emit employeeRemoved(_id, employeeArray[index].name, employeeArray[index].designation);
                employeeArray[index]=employeeArray[employeeArray.length-1];
                employeeArray.pop();
                break;
            }
        }    
    }



    function getEmployeeinfo(uint _id) public view onlyOwner returns(string memory name, uint salary, string memory designation, address walletAddress){
        for(uint index=0; index<employeeArray.length;index++){
           if(employeeArray[index].id ==_id){
            return(
                employeeArray[index].name,
                employeeArray[index].salary,
                employeeArray[index].designation,
                employeeArray[index].walletAddress
            );
           }
        }
    }




    function updateEmployeeDetails(uint _id, uint _newSalary, string memory _designation) public onlyOwner {
        for(uint index=0; index<employeeArray.length;index++){
           if(employeeArray[index].id ==_id){
            employeeArray[index].salary = _newSalary;
            employeeArray[index].designation = _designation;
            emit employeeUpdated(_id, _newSalary, _designation);
           }
        }   
    }




    function payAllEmployees() public onlyOwner {
        

    }


    























}