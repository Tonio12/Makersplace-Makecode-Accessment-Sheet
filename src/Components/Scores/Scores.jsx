import React, { useState } from "react";
import "./Scores.css";
import {
  SystemPrototype,
  SDG,
  Presentation,
  teamQualities,
} from "../../data/Questions";

function Scores() {
  const [score, setScore] = useState(0);
  function handleYesScoreChange(e) {
    setScore((prev) => {
      return prev + parseInt(e.target.value);
    });
  }

  function handleNoScoreChange(e) {
    setScore((prev) => {
      return prev - parseInt(e.target.value);
    });
  }

  return (
    <div className="s-container">
      <div>
        <span>Official Score Calculator By </span>
        <span className="stroke-text">Makersplace</span>
      </div>
      <div className="score-session">
        <div className="start-over" onClick={() => window.location.reload()}>
          <span>Start Over</span>
        </div>
        <div className="score">
          <span>Score: </span>
          <span>{score}</span>
        </div>
      </div>

      <div className="q-container">
        <span className="q-header">System Prototype</span>
        <div className="questions">
          {SystemPrototype.map((object, i) => {
            return (
              <div key={object.key} className="question">
                <span>{object.question}</span>
                <div>
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleNoScoreChange}
                    defaultChecked
                  />
                  No
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleYesScoreChange}
                  />
                  Yes
                </div>
              </div>
            );
          })}
        </div>

        <span className="q-header">Sustainable Development Goals</span>
        <div className="questions">
          {SDG.map((object, i) => {
            return (
              <div key={i} className="question">
                <span>{object.question}</span>
                <div>
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleNoScoreChange}
                    defaultChecked
                  />
                  No
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleYesScoreChange}
                  />
                  Yes
                </div>
              </div>
            );
          })}
        </div>

        <span className="q-header">Presentation</span>
        <div className="questions">
          {Presentation.map((object, i) => {
            return (
              <div key={i} className="question">
                <span>{object.question}</span>
                <div>
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleNoScoreChange}
                    defaultChecked
                  />
                  No
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleYesScoreChange}
                  />
                  Yes
                </div>
              </div>
            );
          })}
        </div>

        <span className="q-header">Team Work</span>
        <div className="questions">
          {teamQualities.map((object, i) => {
            return (
              <div key={i} className="question">
                <span>{object.question}</span>
                <div>
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleNoScoreChange}
                    defaultChecked
                  />
                  No
                  <input
                    type="radio"
                    name={object.Number}
                    value={object.value}
                    onChange={handleYesScoreChange}
                  />
                  Yes
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Scores;
