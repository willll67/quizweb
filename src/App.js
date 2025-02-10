// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IntroductionPage from './IntroductionPage';  // 新增引入
import QuizPage from './QuizPage';
import PersonalityTypes from './PersonalityTypes';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Financial Habit Quiz</h1>
        <ul>
          <li>
            <Link to="/intro">Introduction</Link>
          </li>
          <li>
            <Link to="/">Quiz</Link>
          </li>
          <li>
            <Link to="/personality">Personality Types</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/intro" element={<IntroductionPage />} />
        <Route path="/" element={<QuizPage />} />
        <Route path="/personality" element={<PersonalityTypes />} />
      </Routes>
    </div>
  );
}

export default App;
