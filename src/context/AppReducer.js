export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case "DELETE_INCOME":
      const idIncome = action.id;
      const _incomeTransactions = state.incomeTransactions.filter(
        (t) => t.id !== idIncome
      );
      return {
        ...state,
        incomeTransactions: _incomeTransactions,
      };
    case "DELETE_EXPENSE":
      const id = action.id;
      const _expenseTransactions = state.expenseTransactions.filter(
        (t) => t.id !== id
      );
      return {
        ...state,
        expenseTransactions: _expenseTransactions,
      };
    default:
      return state;
  }
};
