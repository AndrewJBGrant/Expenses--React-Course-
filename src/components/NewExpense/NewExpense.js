import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm]  = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      // this id Math generates a random number for the new expense id
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
    //console.log(expenseData);
  };

  const showFormhandler = () => {
    setShowForm(true);
  }

  const cancelButtonHandler = () => {
  setShowForm(false);
  };





  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormhandler}>Add new expense</button>}

      {/* Here inside of ExpenseForm we are passing a pointer to the
      saveExpenseDataHandler function is now accesible in ExpenseForm */}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton={cancelButtonHandler} />}
    </div>
  );
};

export default NewExpense;
