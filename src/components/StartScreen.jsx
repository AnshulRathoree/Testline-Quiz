import './styles/StartScreen.css'
export default function StartScreen({ quizTitle = "Welcome to the Quiz!", onStart }) {
    const description = "Test your knowledge in Genetics and Evolution";
  
    return (
      <div className="start-screen">
        <h1>{quizTitle}</h1>
        <p>{description}</p>
  
        {/* Start Button */}
        <button
          className="start-button"
          onClick={onStart}
          aria-label="Start the quiz"
        >
          Start Quiz
        </button>
      </div>
    );
  }
  