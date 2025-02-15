import React from 'react';
import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'

/* Example output of the "guess function"
[
  { letter: 'W', status: 'incorrect' },
  { letter: 'H', status: 'incorrect' },
  { letter: 'A', status: 'correct' },
  { letter: 'L', status: 'misplaced' },
  { letter: 'E', status: 'misplaced' },
]
*/

function Cell(guess) {
    const className = guess.status ? `cell ${guess.status}` : `cell`;

    return (
        <span className={className}>
            {guess.letter}
        </span>
    )
}

function GuessRow({guess, answer}, guesses) {
    const validation = checkGuess(guess, answer);

    return (
        <p className="guess">
            {range(0, 5).map((num) => (
                <Cell
                    key={num}
                    letter={validation ? validation[num].letter : undefined}
                    status={validation ? validation[num].status : undefined}
                />
            ))
            }
        </p>
    )
}

export default GuessRow;