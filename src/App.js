import { useState, useEffect, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Confetti from 'react-confetti';
import Navbar from './components/Navbar';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState('idle'); // idle, loading, active, completed
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30); // Set initial timer to 30 seconds
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  // Memoize the handleNextQuestion function
  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30); // Reset timer for the next question
    } else {
      setQuizState('completed');
    }
  }, [currentQuestion, quizData]);

  useEffect(() => {
    const loadQuizData = async () => {
      setQuizState('loading');
      try {
        const response = await fetch('/apiEndPoint.json');
        const data = await response.json();
        setQuizData(data);
        setQuizState('idle');
      } catch (error) {
        console.error('Error loading quiz data:', error);
        setQuizState('error');
      }
    };

    loadQuizData();

    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (quizState === 'active' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer on component unmount or when quiz ends
    } else if (timeLeft === 0) {
      // Time is up for the current question, move to the next question
      handleNextQuestion();
    }
  }, [quizState, timeLeft, handleNextQuestion]);  // Added handleNextQuestion to the dependency array

  const handleStartQuiz = () => {
    setQuizState('active');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions([]);
    setTimeLeft(30); // Reset timer when quiz starts
  };

  const handleAnswer = (isCorrect, optionId) => {
    if (!quizData || !quizData.questions || quizData.questions.length === 0) {
      return; // Early return if data is not available
    }

    const newScore = isCorrect
      ? score + 1 // Add 1 for correct answers (you can adjust as needed)
      : score;

    setScore(newScore);

    setSelectedOptions([
      ...selectedOptions,
      {
        questionId: quizData.questions[currentQuestion].id,
        optionId,
      },
    ]);

    if (currentQuestion < quizData.questions.length - 1) {
      setTimeout(() => handleNextQuestion(), 300); // Wait a moment before moving to next question
    } else {
      setQuizState('completed');
    }
  };


  return (
    <div className="app">
      <Navbar />
      {quizState === 'error' && (
        <div className="error-state">
          <FiAlertCircle size={48} />
          <h2>Failed to load quiz</h2>
          <p>Please check your connection and try again</p>
        </div>
      )}

      {quizState === 'loading' && <Loader />}

      <main className="main-content">
        {quizState === 'idle' && quizData && (
          <StartScreen quizTitle={quizData?.title} onStart={handleStartQuiz} />
        )}

        {quizState === 'active' && quizData && quizData.questions && quizData.questions.length > 0 && (
          <QuizScreen
            question={quizData.questions[currentQuestion]}
            totalQuestions={quizData.questions.length}
            currentQuestion={currentQuestion + 1}
            handleAnswer={handleAnswer}
            selectedOptions={selectedOptions}
            timeLeft={timeLeft}
            restartQuiz={handleStartQuiz}
          />
        )}

        {quizState === 'completed' && (
          <>
            <Confetti
              width={windowSize[0]}
              height={windowSize[1]}
              recycle={false}
              numberOfPieces={400}
            />
            <ResultScreen
              score={score}
              totalQuestions={quizData?.questions.length}
              onRestart={handleStartQuiz}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
