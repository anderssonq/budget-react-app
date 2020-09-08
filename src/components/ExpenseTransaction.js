import React from "react";

const ExpenseTransaction = ({ transaction, onDelete }) => {
  return (
    <div>
      <li className="transaction">
        <span className="transaction-text">{transaction.expenseText}</span>
        <span className="transaction-amount">${transaction.expenseAmount}</span>
        <button className="delete-btn" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default ExpenseTransaction;
