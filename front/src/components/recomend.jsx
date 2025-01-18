import React, { useState } from "react";
//import './Recomend.css'; // Optional styling

const Recomend = () => {
  // State to store the risk percentage and recommendations
  const [riskPercentage, setRiskPercentage] = useState(0);
  const [riskLevel, setRiskLevel] = useState("");
  const [recommendations, setRecommendations] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Determine risk level based on the percentage
    let level = "";
    let recs = "";

    if (riskPercentage >= 0 && riskPercentage <= 20) {
      level = "Low";
      recs = (
        <ul>
          <li>Maintain healthy habits.</li>
          <li>Regular eye checkups every 1-2 years.</li>
        </ul>
      );
    } else if (riskPercentage >= 21 && riskPercentage <= 50) {
      level = "Medium";
      recs = (
        <ul>
          <li>Limit screen time to 4-5 hours daily.</li>
          <li>Spend at least 1 hour outdoors daily.</li>
          <li>Use proper lighting while reading or working.</li>
        </ul>
      );
    } else if (riskPercentage >= 51 && riskPercentage <= 80) {
      level = "High";
      recs = (
        <ul>
          <li>Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.</li>
          <li>Avoid prolonged near work.</li>
          <li>Spend 2+ hours outdoors daily.</li>
        </ul>
      );
    } else if (riskPercentage >= 81 && riskPercentage <= 100) {
      level = "Very High";
      recs = (
        <ul>
          <li>Immediate consultation with an eye specialist is recommended.</li>
          <li>Strictly limit screen time to under 3 hours daily.</li>
          <li>Ensure ergonomic workspace and proper lighting.</li>
          <li>Consider corrective lenses or other medical advice.</li>
        </ul>
      );
    } else {
      recs = <p>Invalid input. Please enter a percentage between 0 and 100.</p>;
    }

    // Update the state with the new risk level and recommendations
    setRiskLevel(level);
    setRecommendations(recs);
  };

  return (
    <div>
      <h3>Myopia Risk Level and Recommendations</h3>

      <form onSubmit={handleFormSubmit}>
        <div className="rec">
        <label htmlFor="riskPercentage">Enter Risk Percentage (0-100):</label>
        <input
          type="number"
          id="riskPercentage"
          value={riskPercentage}
          onChange={(e) => setRiskPercentage(e.target.value)}
          min="0"
          max="100"
        />
        <button type="submit">Submit</button>
        </div>
      </form>

      {/* Displaying risk level and recommendations */}
      {riskLevel && (
        <div>
          <h2>Risk Level: {riskLevel}</h2>
          {recommendations}
        </div>
      )}
    </div>
  );
};

export default Recomend;
