import React, { useState } from "react";

function UserInput(props) {
    const [enteredSavings, setEnteredSavings] = useState('');
    const [enteredYearlyContribution, setEnteredYearlyContribution] = useState('');
    const [enteredInterest, setEnteredInterest] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');

    function savingsChangeHandler(event) {
      setEnteredSavings(event.target.value)
    }

    function yearlyContributionChangeHandler(event) {
      setEnteredYearlyContribution(event.target.value);
    }

    function interestChangeHandler(event) {
      setEnteredInterest(event.target.value);
    }

    function durationChangeHandler(event) {
      setEnteredDuration(event.target.value);
    }

    function submitHandler(event) {
      event.preventDefault();
      const data = {
        savings: +enteredSavings,
        yearlyContribution: +enteredYearlyContribution,
        interest: +enteredInterest,
        duration: +enteredDuration
      };
      props.onSaveInput(data);
      
      setEnteredSavings('');
      setEnteredYearlyContribution('');
      setEnteredInterest('');
      setEnteredDuration('');
     
    }

    function resetHandler(event) {
      event.preventDefault();
      setEnteredSavings('');
      setEnteredYearlyContribution('');
      setEnteredInterest('');
      setEnteredDuration('');
    }

    return (
        <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={savingsChangeHandler} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={yearlyContributionChangeHandler} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={interestChangeHandler} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={durationChangeHandler} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button" onClick={submitHandler}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default UserInput;
