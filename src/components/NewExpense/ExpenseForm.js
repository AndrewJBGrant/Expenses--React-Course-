import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  //   // event.target.value always returns a string so initial useState value is empty string ''
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Managing more then one state by passing useState an object
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //Following is a good run through of getting values
  //document.getElementById('').addEventListener('click', (event) => {});
  const titleChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);
    //console.log('Title Changed!!');
    // setUserInput({
    //   // spread operator used to take other values to old object an adds to the updated
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // Best method of updating while depending on previous State using fucntion syntax
    // React schedules state updates, does not preform instantly meaning if alot of updates are running you could be depending on an outdated state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangehandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

// Built in form submissions causes page to reload, over-ride with event.preventDefault()
  const submitHandler = (event) => {
    event.preventDefault();

// Create an object to captute values from for submit
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
      };
         //console.log(expenseData);
         props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
      };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* value={enteredTitle} resets the value in the form */}
          {/* <input is a built in component> */}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        {/* Good date picker */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
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
