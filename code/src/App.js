import React, { useState } from 'react';

import Start from 'components/Start';
import Question1 from 'components/Question1';
import Question2 from 'components/Question2';
import Question3 from 'components/Question3';
import Question4 from 'components/Question4';
import Summary from 'components/Summary';
import Footer from 'components/Footer';

export const App = () => {
  // All the State Hooks
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');

  // The function that is moving the survey forvard and
  // is triggerd by the button-clicks inside the components.
  const handleStepIncrese = (element, choicemade) => {
    // Only allows the buttons to be clicked if the user has
    // triggered a response.
    if (!choicemade) {
      return;
    }
    // If the user has inserted name and pressed enter it returns a value of
    // undefined, if this happens the user will be ushered to the next question.
    if (element !== undefined) {
      element.preventDefault();
    }
    if (step < 7) {
      setStep(step + 1)
    }
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div id="nextStep">
          {step === 1 && (
            <Start
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 2 && (
            <Question1
              name={name}
              setName={setName}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 3 && (
            <Question2
              question2={question2}
              setQuestion2={setQuestion2}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 4 && (
            <Question3
              question3={question3}
              setQuestion3={setQuestion3}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 5 && (
            <Question4
              question4={question4}
              setQuestion4={setQuestion4}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 6 && (
            <Summary
              name={name}
              question2={question2}
              question3={question3}
              question4={question4}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div className="end-page">
          {step === 7 && (
            <p>Thank you for your time!</p>
          )}
        </div>
        {/* A footer that is visable on every page. */}
        <div className="footer">
          <Footer />
        </div>

      </div>
    </div>
  );
}
