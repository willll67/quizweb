// src/PersonalityTypes.js
import React from 'react';
import { quizResultDescriptions } from './data';
import './App.css';

function PersonalityTypes() {
  return (
    <div className="personality-page">
      <h2>Personality Types</h2>
      <p>Learn about the different financial personality types:</p>
      <div className="personality-list">
        {Object.keys(quizResultDescriptions).map((typeKey) => {
          const typeInfo = quizResultDescriptions[typeKey];
          return (
            <div key={typeKey} className="personality-card">
              <h3>{typeInfo.title}</h3>
              <p>
                <strong>Analysis:</strong> {typeInfo.analysis}
              </p>
              <p>
                <strong>Advice:</strong> {typeInfo.advice}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalityTypes;
