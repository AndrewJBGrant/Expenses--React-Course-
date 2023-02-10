import React, { useState } from "react";
import "./ExpenseForm.css";

  const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   // event.target.value always returns a string so initial useState value is empty string ''
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");
const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',

});

  //document.getElementById('').addEventListener('click', (event) => {});
  const titleChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value);
    //setEnteredTitle(event.target.value);
    //console.log('Title Changed!!');
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    })
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    })
  };

  const dateChangehandler = (event) => {
    //setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate : event.target.value,
    })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
