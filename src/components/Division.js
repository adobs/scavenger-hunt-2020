import React, { useState } from 'react';
import styles from './division.module.css';

function Division() {
  const [formData, updateFormData] = useState({});
  const [validation, setValidation] = useState('');
  const [line1FinalHint, setLine1FinalHint] = useState('');
  const [line2FinalHint, setLine2FinalHint] = useState('');

  const letters = ['A', 'D', 'E', 'I', 'L', 'N', 'S', 'T', 'V', 'Y'];

  const onSubmit = evt => {
    evt.preventDefault();

    fetch('https://scavenger-hunt-api.herokuapp.com/division', {
      // fetch('http://localhost:5000/division', {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'application/json',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      },
      redirect: 'follow'
    })
      .then(resp => resp.json())
      .then(data => {
        setValidation(data.validation);
        setLine1FinalHint(data.line_1);
        setLine2FinalHint(data.line_2);
      })
      .catch(err => console.log('err ', err));
  };

  const onInputChange = evt => {
    updateFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div>
      <div className={styles.Container}>
        <img className={styles.Graphic} src="/division.png" alt="division.png" />
        <div className={styles.AnswerColumn}>
          <form onSubmit={onSubmit}>
            {letters.map((letter, i) => (
              <div key={i} className={styles.AnswerRow}>
                <span className={styles.Letter}>{letter}</span>
                <input className={styles.Input} name={letter} onChange={onInputChange} />
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
          {validation && <p>{validation}</p>}
        </div>
      </div>
      {validation === 'Correct!' && (
        <div className={styles.FinalHint}>
          <p>{line1FinalHint}</p>
          <p>{line2FinalHint}</p>
        </div>
      )}
    </div>
  );
}

export default Division;
