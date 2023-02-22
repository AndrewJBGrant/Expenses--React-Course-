import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [dropDownYear, setDropDownYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    //console.log("Expense.js");
    //console.log(selectedYear);
    setDropDownYear(selectedYear);
  };

//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
  const filterExpenses = props.items.filter((expense) => {
    // filter the props.item array and return the date value for the dropDownyear
    return expense.date.getFullYear().toString() === dropDownYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={dropDownYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
       <ExpensesList items={filterExpenses}  />
      </Card>
    </div>
  );
}

export default Expenses;
