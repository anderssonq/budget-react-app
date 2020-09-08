import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const { expenseText, expenseAmount } = expense;

  const { addIncome, addExpense } = useContext(GlobalContext);

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: parseFloat(incomeAmount),
    };

    addIncome(newIncomeTransaction);

    console.log(newIncomeTransaction);
    setIncome({
      incomeText: "",
      incomeAmount: 0,
    });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: parseFloat(expenseAmount),
    };

    addExpense(newExpenseTransaction);

    console.log(newExpenseTransaction);
    setExpense({
      expenseText: "",
      expenseAmount: 0,
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
            value={incomeText}
            required
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
            value={incomeAmount}
            required
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            onChange={onChangeExpense}
            value={expenseText}
            placeholder="Add expense..."
            autoComplete="off"
            required
          />
          <input
            type="number"
            name="expenseAmount"
            onChange={onChangeExpense}
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            required
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
