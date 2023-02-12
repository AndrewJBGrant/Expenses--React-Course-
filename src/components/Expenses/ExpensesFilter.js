import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //const [year, setYear] = useState(props.year);
  const filterYearHandler = (event) => {
    props.onChangeFilter(event.target.value)

  // console.log(event.target.value);
  };


  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* Click Event should trigger a function */}
        <select value={props.selected} onChange={filterYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
