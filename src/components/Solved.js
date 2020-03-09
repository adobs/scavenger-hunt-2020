import React from 'react';
import IndividualHint from './individualHint'

function solved () {
    return (
        <div>
            <p>So, you've solved the puzzle?</p>
            <IndividualHint
                type='solved'
                question='What phrase does the entire thing simplify to?'
                selectedText={1} />
        </div>
    )
}

export default solved;
