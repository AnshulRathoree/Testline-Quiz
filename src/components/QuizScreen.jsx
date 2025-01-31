import React from 'react';
import './styles/QuizScreen.css';

const QuizScreen = ({
  question,
  totalQuestions,
  currentQuestion,
  handleAnswer,
  selectedOptions,
  timeLeft,
  restartQuiz, // Function passed as prop to restart the quiz
}) => {
  const handleOptionClick = (option) => {
    const isCorrect = option.is_correct;
    handleAnswer(isCorrect, option.id);
  };

  return (
    <div className="quiz-screen">
      <h2>{question.description}</h2>
      <p>Question {currentQuestion} of {totalQuestions}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <div
            key={option.id}
            className="option"
            onClick={() => handleOptionClick(option)}
          >
            <p>
              <span className="option-number">{index + 1}. </span>
              <span className="option-text">{option.description}</span>
            </p>
          </div>
        ))}
      </div>
      <p>Time left: {timeLeft} seconds</p>
      
      {/* Restart Button */}
      <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default QuizScreen;
