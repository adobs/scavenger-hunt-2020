import React from 'react';
import PropTypes from 'prop-types';
import styles from './encryptedText.module.css';

const text = {
    1: 'GQBYA YVYWF VJTIL EAGNE X',
    2: 'FOLYJ KDGHK RUOKN LUPKV SOLSU OTSWD EXRVV',
    3: 'MBYGQ FBGNN JFMZY WCQQM BGXNQ SBAUI MUHUJ A',
    4: 'HKQPF EJBIY DNLUN GXPYP TWBDN IDKXY',
    5: 'MHUCC WOZWU UVBFU UVKVB',
    6: 'HGEKZ COXHP ZEKVG R',
    7: 'EGVYS RIHZD DYDCU RTBYE CEOHY WKEYZ NOECD IZIKQ OZ',
    8: 'BGMDW XYQYP OFPSY WQCHB',
    9: 'NYWXJ EVVUU GTNIF LJHDJ AVJLR Z',
    10: 'STKYR LAWVW SOAQM JASYW BD'
};

function encryptedText ({ selectedText }) {
    return (
        <div>
            <p className={styles.EncryptedText}>
                {text[selectedText]}
            </p>
        </div>
    )
}

encryptedText.propTypes = {
    selectedText: PropTypes.number.isRequired,
}

encryptedText.defaultProps = {
    selectedText: 1
}

export default encryptedText;
