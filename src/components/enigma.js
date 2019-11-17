import React from 'react';
import EncryptedText from './encryptedText';
import Menu from './menu';
import Hint from './hint';
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
                <button
                    onClick={() => this.setState({
                        showHint: true
                    })}
                >
                    <FaSmileWink size={44} />
                </button>
                {this.state.showHint && <Hint
                    onClose={() => this.setState({showHint: false})}
                    selectedText={this.state.selectedText}
                />}
            </React.Fragment>
        )
    }
}

export default Enigma;
