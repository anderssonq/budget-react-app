import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomesAmout = incomeTransactions.reduce(
    (acum, curr) => acum + curr.incomeAmount,
    0
  );
  const expensesAmout = expenseTransactions.reduce(
    (acum, curr) => acum + curr.expenseAmount,
    0
  );

  const totalAmount = incomesAmout - expensesAmout;

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${totalAmount}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${+incomesAmout.toFixed(2)}</p>
        </div>
        <div className="minus">
          <h3>Expense</h3>
          <p>-${+expensesAmout.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
