import React from 'react';
import './styles/ResultScreen.css'
const ResultScreen = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="result-screen">
      <h2>Quiz Completed</h2>
      <p>Your Score: {score} out of {totalQuestions}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default ResultScreen;
