import React, { useState } from 'react';

function DataFilter({ onFilterChange }) {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    onFilterChange(selectedYear, event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    onFilterChange(event.target.value, selectedMonth);
  };

  return (
    <div>
      <label>
        Month:
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">All</option>
          <option value="01">January</option>
          <option value="02">February</option>
          {/* ... add more months */}
        </select>
      </label>
      <label>
        Year:
        <input type='year' value={selectedYear} onChange={handleYearChange}/>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">All</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          {/* ... add more years */}
        </select>
      </label>
    </div>
  );
}

export default DataFilter;
