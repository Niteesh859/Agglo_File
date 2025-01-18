import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './components/dropdown.jsx';
import Navbar from './components/navbar.jsx';
import Chatbot from './components/chatbot.jsx';
import Carousel from './components/carousel.jsx';
//import Snellen from './components/SnellenChart.jsx';
import Test from './components/MyopiaAssessment.jsx';

const App = () => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState([]);

  // Load feedback from localStorage on component mount
  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setSubmittedFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  // Update localStorage whenever submittedFeedback changes
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(submittedFeedback));
  }, [submittedFeedback]);

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      const updatedFeedback = [...submittedFeedback, feedback.trim()];
      setSubmittedFeedback(updatedFeedback);
      setFeedback("");
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  const handleDelete = (index) => {
    const updatedFeedback = submittedFeedback.filter(
      (_, i) => i !== index
    );
    setSubmittedFeedback(updatedFeedback);
  };

  const clearFeedback = () => {
    setSubmittedFeedback([]);
    localStorage.removeItem("feedback");
  };

  return (
    <div className="container mt-5">
      {/* Include all components inside return statement */}
      <Navbar />
      
      <Carousel />
      <Dropdown />
      
      <Test />
      <Chatbot />
      
      <h1 className="text-center">User Feedback System</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>

      <div className="feedback-list mt-5">
        <h3>Submitted Feedback:</h3>
        {submittedFeedback.length > 0 ? (
          <>
            <ul className="list-group">
              {submittedFeedback.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-danger mt-3"
              onClick={clearFeedback}
            >
              Clear All Feedback
            </button>
          </>
        ) : (
          <p>No feedback submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
