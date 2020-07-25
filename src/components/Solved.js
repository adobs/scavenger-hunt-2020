import React, { useState } from 'react';
import IndividualHint from './IndividualHint';
import Division from './Division';

function Solved() {
  const [image, setImage] = useState(false);

  const showImg = () => setImage(true);

  return (
    <div>
      <p>So, you've solved the puzzle?</p>
      <IndividualHint
        type="solved"
        question="What phrase does the entire thing simplify to?"
        selectedText={1}
        showImg={showImg}
      />
      <div>{image && <Division />}</div>
    </div>
  );
}

export default Solved;
