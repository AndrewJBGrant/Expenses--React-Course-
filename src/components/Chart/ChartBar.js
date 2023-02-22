import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
// This variable will determine how much to fill the chart bars
let barFillHeight = '0%';

if(props.maxValue > 0) {
  // this gets the percentage of which the ChartBar should be filled
  barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
}


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* style wants a JS object as a value */}
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      {/* props.label = month defined in ExpensesChart */}
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
