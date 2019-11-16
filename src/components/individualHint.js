import React from 'react';

class IndividualHint extends React.Component {
    constructor(props) {
        super(props)

        this.state =  {
            validation: '',
            guess: ''
        }

        this.input = React.createRef();

    }

    componentDidMount() {
        if (this.props.type === 'who') {
            this.input.current.focus();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedText !== this.props.selectedText) {
            console.log('prevProps ', prevProps.selectedText)
            console.log('this.props ', this.props.selectedText)
            this.setState({
                validation: '',
                guess: ''
            })
        }
    }


    onInputChange = (evt) => {
        const guess = evt.target.value
        // const guess = this.input.current.value;
        const { selectedText } = this.props;
        console.log('guess ', guess, 'selectedText ', selectedText)
        if (!guess) {
            this.setState({
                validation:  ''
            })
        }
        this.setState({
            guess,
        });
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        const { selectedText } = this.props;

        // const guess = this.input.current.value;
        const guess = this.state.guess
        // make this be a call to the backend? using the hint and the guess
        let validation = 'That is incorrect';
        if (guess === 'Arwen') {
            this.setState({
                validation: 'Correct',
            })
        }

        this.setState({
            validation
        })
        console.log('this would be a function from the hint.js ', this.props.type, this.props.selectedText)
    }

    render() {
        return (
            <React.Fragment>
                <label htmlFor='who'>{this.props.question}</label>
                <div>
                    <input
                        name='who'
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

export default IndividualHint;
