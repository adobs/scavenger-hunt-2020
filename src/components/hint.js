import React from 'react';
import IndividualHint from './IndividualHint';
import Modal from './Modal'
import SelectedTextContext from './SelectedTextContext';

function Hint ({ onClose }) {

    return (
        <Modal
            onClose={onClose}
            show={true}
        >
            <SelectedTextContext.Consumer>
                {( selectedText ) => (
                    <React.Fragment>
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
                    </React.Fragment>
                )}
            </SelectedTextContext.Consumer>
        </Modal>
    );
}

export default Hint;
