import React, { useState } from 'react';

const Question4 = ({ question4, setQuestion4, handleStepIncrese }) => {
  // The State Hook that prevents the button to be used before the user have made a change
  // of the dropdown.
  const [chosen, setChosen] = useState(false);

  // Forwards the value of the dropdown to the App-component.
  const handleQuestion4Change = (event) => {
    setQuestion4(event.target.value);
    setChosen(true);
  }

  return (
    <>
      <div className="question-box">
        <section className="dropdownSelect">
          <p className="question">What are you doing tomorrow?</p>
          <select
            htmlFor="options"
            className="dropdown"
            id="options"
            value={question4}
            onChange={(event) => handleQuestion4Change(event)}>

            <option disabled value="">Select an option:</option>
            <option value="working">Working</option>
            <option value="studying">Studying</option>
            <option value="away">Going away</option>
            <option value="unicorn">Getting a unicorn</option>
            <option value="bath">Going bathing</option>
            <option value="restaurant">Going out to dinner</option>
            <option value="workout">Getting a workout</option>
            <option value="other">Other</option>

          </select>
        </section>
      </div>
      <div className="button-text">
        <button type="button" id="nextBtn" onClick={(event) => handleStepIncrese(event, chosen)}>Next page</button>
        <p>Question 4 out of 4</p>
      </div>
    </>
  );
}

export default Question4;