import React from 'react';
import IndividualHint from './individualHint';
import Modal from './modal'

function Hint ({ selectedText, onClose }) {

    return (
        <Modal
            onClose={onClose}
            show={true}
        >
            <h2>{`Hint for #${selectedText}`}</h2>
            <form>
                <IndividualHint
                    selectedText={selectedText}
                    question='What/ who is this hint about?'
                    type='who' />
                <IndividualHint
                    selectedText={selectedText}
                    question="After you've done the action, what does the hint translate to?"
                    type='translate' />
            </form>
        </Modal>
    );
}

export default Hint;
