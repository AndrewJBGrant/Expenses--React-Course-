import React from "react";
import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      // this id Math generates a random number for the new expense id
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="new-expense">

      {/* Here inside of ExpenseForm we are passing a pointer to the
      saveExpenseDataHandler function is now accesible in ExpenseForm */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
