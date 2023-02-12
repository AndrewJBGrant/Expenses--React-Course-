import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€ {props.amount}</div>
      </div>

    </Card>
  );
}

export default ExpenseItem;




// Quick code to change title
// //import React, { useState } from "react";
// const [title, setTitle] = useState(props.title);
//   // We have 4 seperate instances of ExpenseItem
//   //console.log('ExpenseItem evaluated by React');

//   const clickHandler = () => {
//     setTitle("Updated");
//     //Value below is not cahnged yet as React has not updated the component
//     //console.log(title);
//     <button onClick={clickHandler}>Change Title</button>
