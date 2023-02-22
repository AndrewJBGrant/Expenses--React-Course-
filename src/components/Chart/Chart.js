import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {


// every dataPoint is an Object!
// call map() to tranform dataPoint to just a number dataPoint.value
// dataPointValues is a new array of numbers coming from dataPoint.value
 const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
 // Use spread operator to add all dataPointValues as argument for Math.max
 const totalMaximum = Math.max(...dataPointValues);

//console.log(dataPointValues) for year 2021 = (12) [0, 0, 1094.16, 0, 0, 450, 0, 0, 0, 0, 0, 0]
//console.log(totalMaximum) for year 2021 returns 1094.16 (the sum of expenes for March)


// Using map() here to run through array(dataPoints) and map every dataPoint to a chartBar
  return (
    <div className="chart">
      {/* // dataPoints is sent from ExpensesChart */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar // Set which data to be rendered in the chart bar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum} // Unique value the same for all chartbars in a chart, not extracted from dataPoints
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
