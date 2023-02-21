import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [dropDownYear, setDropDownYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    //console.log("Expense.js");
    //console.log(selectedYear);
    setDropDownYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dropDownYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={dropDownYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesList items={filterExpenses}  />
      </Card>
    </div>
  );
}

export default Expenses;
