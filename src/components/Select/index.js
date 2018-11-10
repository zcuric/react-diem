import React from "react";

const Select = ({ value, onChange, options }) => (
  <select value={value} onChange={onChange}>
    {options.map(item => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ))}
  </select>
);

export default Select;
