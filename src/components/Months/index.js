import React from "react";
import Month from "../Month";

const Months = ({ numberOfMonths = 2 }) =>
  Array.from(Array(numberOfMonths).keys()).map(key => (
    <Month number={key} key={key} />
  ));

export default Months;
