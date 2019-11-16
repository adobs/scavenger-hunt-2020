import React from 'react';
import EncryptedText from './encryptedText';
import Menu from './menu';
import Hint from './hint';

class Enigma extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedText: 1
        }
    }

    menuClickHandler = (menuNum) => {
        this.setState({
            selectedText: menuNum
        });
    }

    render() {
        return(
            <React.Fragment>
                <Menu onClickHandler={this.menuClickHandler}/>
                <EncryptedText selectedText={this.state.selectedText} />
                <Hint selectedText={this.state.selectedText} />
            </React.Fragment>
        )
    }
}

export default Enigma;
