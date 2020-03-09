// TOOD
// organize code better
// rename encryptedText
// utils for the actual text
// propTypes
// query string
// 404 page?


import React from 'react';
import EncryptedText from './EncryptedText';
import Menu from './Menu';
import Hint from './Hint';
import { FaSmileWink } from 'react-icons/fa';
import styles from './enigma.module.css';
import SelectedTextContext from './SelectedTextContext'

class Enigma extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedText: 1,
            showHint: false
        }
    }

    menuClickHandler = (menuNum, evt) => {
        this.setState({
            selectedText: menuNum
        });
    }

    openEnigmaLink = () => {
        window.open('https://py-enigma.readthedocs.io/en/latest/guide.html');
    }

    render() {
        return(
            <React.Fragment>
                <SelectedTextContext.Provider value={this.state.selectedText}>
                    <h1 className={styles.SorenBtn} onClick={this.openEnigmaLink}>
                        <a
                            className={styles.SorenLink}
                            href='https://adobs.github.io/scavenger-hunt-2020/key_sheet.txt'
                            download
                            // eslint-disable-next-line 
                            target="_blank"
                        >
                            Soren's Scavenger Hunt 2020
                        </a>
                    </h1>
                    <Menu onClickHandler={this.menuClickHandler} selectedText={this.state.selectedText}/>
                    <EncryptedText selectedText={this.state.selectedText} />
                    {this.state.selectedText !== 0 &&
                        <button
                            onClick={() => this.setState({
                                showHint: true
                            })}
                            className={styles.HintBtn}
                        >
                        <FaSmileWink size={30} />
                    </button>
                    }
                    {this.state.showHint &&
                        <Hint
                            onClose={() => this.setState({showHint: false})}
                        />
                    }
                </SelectedTextContext.Provider>
            </React.Fragment>
        )
    }
}

export default Enigma;
