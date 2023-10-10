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
    const arr = Array.from({ length: rows }, (value, index) => index + 1).map(
      (rowNumber) => {
        return (
          <tr key={rowNumber}>
            {Array.from({ length: columns }, (value, index) => index + 1).map(
              (columnNumber) => {
                // const ttrue = rows * columnNumber + (rowNumber + 1);
                console.log("columnNumber % 2 === 0", columnNumber % 2 === 0);
                const value =
                  columnNumber % 2 === 0
                    ? rows * columnNumber + rowNumber
                    : rows * columnNumber - rowNumber;
                console.log("value", value);
                // console.log('ttrue', ttrue)
                // const ffalse = rows * (columnNumber + 1) - rowNumber;
                // console.log('ffalse', ffalse)
                return <td key={columnNumber}>{value}</td>;
              }
            )}
          </tr>
        );
      }
    );

    console.log("arr", arr);
    return (
      <tbody>
        {Array.from({ length: rows }, (r) => {
          console.log("r", r);
          return 0;
        }).map((_, row) => {
          console.log("_", _);
          console.log("row", row);
          return (
            <tr key={row}>
              {Array.from({ length: columns }, () => 0).map((_, col) => (
                <td key={col}>
                  {col % 2 === 0
                    ? rows * col + (row + 1)
                    : rows * (col + 1) - row}
                </td>
              ))}
            </tr>
          );
        })}
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
