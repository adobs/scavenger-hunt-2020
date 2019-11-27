import React from 'react';
import PropTypes from 'prop-types';
import axios from './axios-requests';

class IndividualHint extends React.Component {
    constructor(props) {
        super(props)

        this.state =  {
            validation: '',
            guess: '',
        }

        this.input = React.createRef();

    }

    componentDidMount() {
        const { type } = this.props;
        if (type === 'who' || type === 'solved') {
            this.input.current.focus();
        }
    }


    onInputChange = (evt) => {
        const guess = evt.target.value;

        this.setState({
            guess,
            validation: ''
        });
    }

    onSubmit = (evt) => {
        evt.preventDefault();

        const { guess } = this.state;

        const hint = {
            num: this.props.selectedText,
            guess: guess.toLowerCase(),
            type: this.props.type,
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
        // axios.post('/hint', hint, {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        // 	},
        // 	proxy: {
        //         host: 'https://scavenger-hunt.api.herokuapp.com'
        // 	}
    	// })
        .then(resp => resp.json())
        .then(data => {
            const { validation } = data;
            this.setState({
                validation
            })
        })
        .catch(err => console.log('err ', err));
    }

    render() {
        return (
            <React.Fragment>
                <label>{this.props.question}</label>
                <div>
                    <input
                        ref={this.input}
                        onChange={this.onInputChange}
                        type='text'
                        value={this.state.guess}
                        />
                    <button
                        type='submit'
                        disabled={this.state.guess ? false : true}
                        onClick={this.onSubmit}
                    >
                        Submit
                    </button>
                </div>
                {this.state.validation && <p>{this.state.validation}</p>}
            </React.Fragment>
        )
    }
}

IndividualHint.propTypes = {
    selectedText: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default IndividualHint;
