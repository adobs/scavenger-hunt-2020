import React from 'react';
import PropTypes from 'prop-types';

function Menu({ onClickHandler }) {
    // Array of 10 values (0 to 9)
    const numbers = [...Array(10).keys()]
    const numbersMenu = numbers.map((number) => {
        const prettyNumber = number + 1;
        return (
            <li key={number}>
                <button onClick={() => onClickHandler(prettyNumber)}>
                    {prettyNumber}
                </button>
            </li>
        )
    });
    return (
        <ul className='menu'>
            {numbersMenu}
        </ul>
    )
}

Menu.propTypes = {
    onClickHandler: PropTypes.func.isRequired
}

export default Menu;
