import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //Starts at zero!
    // we take the month from expense.date.getMonth and assign it to expenseMonth
    // Then update the value of chartDataPoints by taking each month and adding the expense.amount to it
    chartDataPoints[expenseMonth].value += expense.amount;
  }
// Here we send the chartDataPoints to Chart.js using the prop of dataPoints
  return <Chart  dataPoints ={chartDataPoints}/>;
};

export default ExpensesChart;
