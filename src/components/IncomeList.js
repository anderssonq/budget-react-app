import React, { useContext } from "react";
import IncomeTransaction from "./IncomeTransaction";
import { GlobalContext } from "../context/GlobalState";
const IncomeList = () => {
  const { incomeTransactions, deleteIncome } = useContext(GlobalContext);

  const onHandleDeleteTransaction = (id) => {
    deleteIncome(id)
  };

  return (
    <div className="transactions transactions-income">
      <h2>Transactions History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((transaction) => (
          <IncomeTransaction
            key={transaction.id}
            transaction={transaction}
            onDelete={() => onHandleDeleteTransaction(transaction.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
