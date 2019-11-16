import React from 'react';
import IndividualHint from './individualHint';

function Hint ({ selectedText }) {

    return (
         <div>
            <h2>{`Hint for ${selectedText}`}</h2>
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
        </div>
    );
}

export default Hint;
