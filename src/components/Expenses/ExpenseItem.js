import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        {/* // Taking the div from Expensedate */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

// Quick code to change title
// const [title, setTitle] = useState(props.title);
//   // We have 4 seperate instances of ExpenseItem
//   //console.log('ExpenseItem evaluated by React'); will show *4 on first render, if
// we update title on one item console.log('ExpenseItem evaluated by React'); will show just once

//   const clickHandler = () => {
//     setTitle("Updated");
//     //Value below is not cahnged yet as React has not updated the component
//     //console.log(title);
//     <button onClick={clickHandler}>Change Title</button>
