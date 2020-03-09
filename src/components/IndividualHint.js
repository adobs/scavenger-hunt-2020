import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function IndividualHint (props) {
    const [validation, setValidation] = useState('');
    const [guess, setGuess] = useState('');
    const input = React.createRef();

    useEffect(() => {
        const { type } = props;
        if (type === 'who' || type === 'solved') {
            input.current.focus();
        }
    });

    const onInputChange = (evt) => {
        const guess = evt.target.value;
        setGuess(guess);
        setValidation('');

        if (evt.keyCode === 13 || evt.which === 13) {
            onSubmit(evt);
        }
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        const hint = {
            num: props.selectedText,
            guess: guess.toLowerCase(),
            type: props.type,
        };
        fetch('https://scavenger-hunt-api.herokuapp.com/hint', {
            method: 'POST',
            body: JSON.stringify(hint),
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            },
            redirect: 'follow',
         })
        .then(resp => resp.json())
        .then(data => {
            const { validation } = data;
            setValidation(validation);
        })
        .catch(err => console.log('err ', err));
    }

    return (
        <React.Fragment>
            <label>{props.question}</label>
            <div>
                <input
                    ref={input}
                    onChange={onInputChange}
                    type='text'
                    value={guess}
                    />
                <button
                    type='submit'
                    disabled={guess ? false : true}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </div>
            {validation && <p>{validation}</p>}
        </React.Fragment>
    )
}

IndividualHint.propTypes = {
    selectedText: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default IndividualHint;
