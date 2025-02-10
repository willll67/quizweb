// src/QuizPage.js
import React, { useState } from 'react';
import { questions, quizResultDescriptions } from './data';
import './App.css';


const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (questionId, selectedOptionType) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOptionType,
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scores = { Ant: 0, Owl: 0, Bear: 0, Dolphin: 0, Squirrel: 0, Fox: 0 };
    for (let qId in answers) {
      const type = answers[qId];
      scores[type] = (scores[type] || 0) + 1;
    }
    let highestType = null;
    let highestScore = -1;
    for (let type in scores) {
      if (scores[type] > highestScore) {
        highestScore = scores[type];
        highestType = type;
      }
    }
    setResult(quizResultDescriptions[highestType]);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <h2>Discover Your Money Management Style!</h2>
      <p>
        Take this fun quiz to uncover your unique financial personality through a series of engaging questions.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="question-block">
          <h3>{`Question ${currentQuestion.id} of ${questions.length}`}</h3>
          <p>{currentQuestion.question}</p>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="option">
              <label>
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.type}
                  checked={answers[currentQuestion.id] === option.type}
                  onChange={() => handleChange(currentQuestion.id, option.type)}
                  required
                />
                {option.option}
              </label>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button
            type="button"
            className="nav-button"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button type="button" className="nav-button" onClick={goToNextQuestion}>
              Next →
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Submit Quiz
            </button>
          )}
        </div>
      </form>
      {result && (
        <div className="result">
          <h3>{result.title}</h3>
          <p>
            <strong>Result Analysis:</strong> {result.analysis}
          </p>
          <p>
            <strong>Advice:</strong> {result.advice}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
