// src/components/SnellenChart.jsx
import React, { useState } from "react";

const SnellenChart = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const rows = [
    { id: 1, text: "E", size: "3rem" },
    { id: 2, text: "F P", size: "2.5rem" },
    { id: 3, text: "T O Z", size: "2rem" },
    { id: 4, text: "L P E D", size: "1.75rem" },
    { id: 5, text: "P E C F D", size: "1.5rem" },
    { id: 6, text: "E D F C Z P", size: "1.25rem" },
    { id: 7, text: "F E L O P Z D", size: "1rem" },
  ];

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(rowId)
        ? prevSelected.filter((id) => id !== rowId)
        : [...prevSelected, rowId]
    );
  };

  const handleSubmit = () => {
    fetch("http://127.0.0.1:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rows: selectedRows }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Results received: ${data.message}`);  // Fixed template string
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
        margin: 0,
        padding: "30px",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Left Section: Snellen Chart */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginRight: "20px",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "2.2rem", color: "#333" }}>
          Interactive Snellen Chart
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
          Please ensure that you are viewing the chart from a distance of 10 feet (3 meters).
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            alignItems: "center",
            gap: "15px 30px",
            marginBottom: "30px",
          }}
        >
          {rows.map((row) => (
            <React.Fragment key={row.id}>
              <div
                style={{
                  fontSize: row.size,
                  fontFamily: "Courier New, Courier, monospace",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {row.text}
              </div>
              <input
                type="checkbox"
                style={{
                  width: "35px",
                  height: "35px",
                  accentColor: "#007bff",
                }}
                checked={selectedRows.includes(row.id)}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </React.Fragment>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          style={{
            padding: "15px 30px",
            fontSize: "1.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 10px rgba(0, 123, 255, 0.2)",
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
        >
          Submit
        </button>
      </div>

      {/* Right Section: Description */}
      <div
        style={{
          flex: 1,
          paddingLeft: "40px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#333" }}>
          About the Simulated Snellen Chart
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
          The Snellen chart is an eye chart used to measure visual acuity. It consists of a series of letters or symbols that
          are arranged in rows, with the letters getting progressively smaller as you go down the chart. The user is asked to
          read the letters from a distance to determine their visual clarity and ability to see fine details.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
          This simulated Snellen chart provides an interactive way for you to check your eyesight. Select the rows that you
          can read clearly from the chart, and submit your results. Based on the input, an evaluation will be performed to
          check your visual clarity.
        </p>
      </div>
    </div>
  );
};

export default SnellenChart;
