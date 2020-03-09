// TOOD
// query string
// 404 page?
// enter in IndividualHint submits

import React, { useEffect, useState } from 'react';
import EncryptedText from './EncryptedText';
import Menu from './Menu';
import Hint from './Hint';
import { FaSmileWink } from 'react-icons/fa';
import styles from './enigma.module.css';
import SelectedTextContext from './SelectedTextContext'

function Enigma() {
    const [selectedText, setSelectedText] = useState(1);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        // deployed on heroku -- waking up dynos before actually
        // hitting API in IndividualHint.js to speed up first response
        fetch('https://scavenger-hunt-api.herokuapp.com/hint', {
            method: 'POST',
            body: '',
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
     });


    const menuClickHandler = (menuNum, evt) => {
        setSelectedText(menuNum);
    }

    const openEnigmaLink = () => {
        window.open('https://py-enigma.readthedocs.io/en/latest/guide.html');
    }

    return (
        <React.Fragment>
            <SelectedTextContext.Provider value={selectedText}>
                <h1 className={styles.SorenBtn} onClick={openEnigmaLink}>
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
                <Menu onClickHandler={menuClickHandler} selectedText={selectedText}/>
                <EncryptedText selectedText={selectedText} />
                {selectedText !== 0 &&
                    <button
                        onClick={() => setShowHint(true)}
                        className={styles.HintBtn}
                    >
                    <FaSmileWink size={30} />
                </button>
                }
                {showHint &&
                    <Hint
                        onClose={() => setShowHint(false)}
                    />
                }
            </SelectedTextContext.Provider>
        </React.Fragment>
    )
}

export default Enigma;
