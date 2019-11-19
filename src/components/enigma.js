// TOOD
// organize code better
// rename encryptedText
// utils for the actual text
// backend logic that uses render props
// creacteContext for something to pass props through

import React from 'react';
import EncryptedText from './EncryptedText';
import Menu from './Menu';
import Hint from './Hint';
import { FaSmileWink } from 'react-icons/fa';
import classes from './enigma.module.css';

class Enigma extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedText: 1,
            showHint: false
        }
    }

    menuClickHandler = (menuNum) => {
        this.setState({
            selectedText: menuNum
        });
    }

    openEnigmaLink = () => {
        window.open('https://pypi.org/project/py-enigma/');
    }

    render() {
        return(
            <React.Fragment>
                <h1 className={classes.SorenBtn} onClick={this.openEnigmaLink}>Soren's Scavenger Hunt 2020</h1>
                <Menu onClickHandler={this.menuClickHandler}/>
                <EncryptedText selectedText={this.state.selectedText} />
                {this.state.selectedText !== 0 &&
                    <button
                        onClick={() => this.setState({
                            showHint: true
                        })}
                    >
                    <FaSmileWink size={44} />
                </button>
                }
                {this.state.showHint &&
                    <Hint
                        onClose={() => this.setState({showHint: false})}
                        selectedText={this.state.selectedText}
                    />
                }
            </React.Fragment>
        )
    }
}

export default Enigma;
