import React, { useContext } from "react";

import ExpenseTransaction from "./ExpenseTransaction";
import { GlobalContext } from "../context/GlobalState";
const ExpenseList = () => {
  const { expenseTransactions, deleteExpense } = useContext(GlobalContext);

  const onHandleDeleteTransaction = (id) => {
    deleteExpense(id)
  };

  return (
    <div className="transactions transactions-expense">
      <h2>Transactions History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((transaction) => (
          <ExpenseTransaction
            key={transaction.id}
            transaction={transaction}
            onDelete={() => onHandleDeleteTransaction(transaction.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
