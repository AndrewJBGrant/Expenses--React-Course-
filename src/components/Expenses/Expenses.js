import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

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
        {/* Dynamic!! */}
        {filterExpenses.length === 0 ? (
          <p>No expenses for the year {dropDownYear} </p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
