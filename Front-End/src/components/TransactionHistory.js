import React from "react";
import bonusIcon from "../icons/bonus.svg";
import salaryDepositIcon from "../icons/salary-deposit.svg";

const transactions = [
  {
    type: "Salary Deposit",
    id: "0x03875f1c0e8ff3780065id00d",
    amount: "$120.00",
    date: "20/8/23",
    icon: salaryDepositIcon,
  },
  {
    type: "Bonus",
    id: "0x03875f1c0e8ff3780065id00d",
    amount: "$20.00",
    date: "20/8/23",
    icon: bonusIcon,
  },
  {
    type: "Salary Deposit",
    id: "0x03875f1c0e8ff3780065id00d",
    amount: "$120.00",
    date: "20/8/23",
    icon: salaryDepositIcon,
  },
  {
    type: "Salary Deposit",
    id: "0x03875f1c0e8ff3780065id00d",
    amount: "$120.00",
    date: "20/8/23",
    icon: salaryDepositIcon,
  },
  {
    type: "Salary Deposit",
    id: "0x03875f1c0e8ff3780065id00d",
    amount: "$120.00",
    date: "20/8/23",
    icon: salaryDepositIcon,
  },
];

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <div className="transaction-list">
        {transactions.map((transaction, index) => (
          <div className="transaction" key={index}>
            <div className="transaction-header">
              <img
                src={transaction.icon}
                alt={transaction.type}
                className="transaction-icon"
              />
              <div className="transaction-amount">{transaction.amount}</div>
            </div>
            <div className="transaction-id">{transaction.id}</div>
            <div className="transaction-date">{transaction.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
