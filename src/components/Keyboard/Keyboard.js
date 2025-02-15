import React from 'react';
import {ROWS} from "../../constants";
import {getStatusByLetter} from '../../game-helpers';


function KeyboardButton({letter, letterStatuses}) {
    const status = letterStatuses[letter];
    const className = status
        ? `keyboard-button ${status}`
        : 'keyboard-button';

    return (
        <span className={className}>{letter}</span>
    )
}

function KeyboardRow({letters, letterStatuses}) {
    return (
        <div className='keyboard-row'>
            {letters.map((letter) => (
                <KeyboardButton
                    key={letter}
                    letter={letter}
                    letterStatuses={letterStatuses}
                />
            ))}
        </div>
    )
}

function Keyboard({guesses, answer}) {
    const letterStatuses = getStatusByLetter(guesses, answer);

    return (
        <div className='keyboard-wrapper'>
            {ROWS.map((letters, index) => (
                <KeyboardRow
                    key={index}
                    letters={letters}
                    letterStatuses={letterStatuses}
                />
            ))}
        </div>
    );
}

export default Keyboard;