import React from 'react'

const IncomeTransaction = ({transaction, onDelete}) => {
    return (
        <div>
             <li className="transaction">
            <span className="transaction-text">{transaction.incomeText}</span>
            <span className="transaction-amount">${transaction.incomeAmount}</span>
            <button className="delete-btn" onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </button>
          </li>
        </div>
    )
}

export default IncomeTransaction;