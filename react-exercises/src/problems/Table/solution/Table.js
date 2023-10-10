import React, { useState } from "react";

const Table = () => {
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(1);
  const [showTable, setShowTable] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
    console.log("clicked");
  };

  const handleSetRows = (e) => {
    setShowTable(false);
    setRows(e.target.value);
  };

  const handleSetColumns = (e) => {
    setShowTable(false);
    setColumns(e.target.value);
  };

  const renderTableInputForm = () => {
    return (
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="rows">Rows</label>
        <input
          value={rows}
          onChange={handleSetRows}
          type="number"
          min={1}
          id="rows"
          name="rows"
        />
        <br />
        <label htmlFor="columns">Columns</label>
        <input
          value={columns}
          onChange={handleSetColumns}
          type="number"
          min={1}
          id="columns"
          name="columns"
        />
        <br />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    );
  };

  const renderTable = () => {
    return (
      <tbody>
        {Array.from({ length: rows }, (value, index) => 0).map(
          (v, rowNumber) => {
            return (
              <tr key={rowNumber}>
                {Array.from({ length: columns }, (value, index) => 0).map(
                  (v, columnNumber) => {
                    const value =
                      columnNumber % 2 === 0
                        ? rows * columnNumber + (rowNumber + 1)
                        : rows * (columnNumber + 1) - rowNumber;
                    return <td key={columnNumber}>{value}</td>;
                  }
                )}
              </tr>
            );
          }
        )}
      </tbody>
    );
  };

  return (
    <div>
      {renderTableInputForm()}
      <br />
      <div>{showTable && <table>{renderTable()}</table>}</div>
    </div>
  );
};

export default Table;
