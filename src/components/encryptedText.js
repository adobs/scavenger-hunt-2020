import React from 'react';
import PropTypes from 'prop-types';

const text = {
    1: 'Reach out to your elf',
    2: 'DEF',
    3: 'ghi',
    4: 'Talk to Babe ghetto-amperstand'
}

function encryptedText ({ selectedText }) {
    return (
        <div>
            <p>{text[selectedText]}</p>
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
