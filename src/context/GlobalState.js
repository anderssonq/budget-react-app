import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Cat sold", incomeAmount: 1500 },
    { id: 2, incomeText: "Car sold", incomeAmount: 20000 },
    { id: 3, incomeText: "Pistol sold", incomeAmount: 2500 },
  ],
  expenseTransactions: [
    { id: 1, expenseText: "Dog bought", expenseAmount: 1500 },
    { id: 2, expenseText: "Hourse bought", expenseAmount: 2500 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = (body) => {
    dispatch({
        type: 'ADD_INCOME',
        payload: body
    })
  }  
  
  const addExpense = (body) => {
    dispatch({
        type: 'ADD_EXPENSE',
        payload: body
    })
  }  
  
  const deleteIncome = (id) => {
    dispatch({
        type: 'DELETE_INCOME',
        id: id
    })
  }  
  
  const deleteExpense = (id) => {
    dispatch({
        type: 'DELETE_EXPENSE',
        id: id
    })
  }
  

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteIncome,
        deleteExpense
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
