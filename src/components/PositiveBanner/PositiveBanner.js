import React from 'react';
import Banner from '../Banner';

function PositiveBanner({numOfGuesses, handleRestart}) {
    return (
        <Banner variant='happy'>

            <p>
                <strong>Congratulations!</strong> Got it
                in <strong>{numOfGuesses} {numOfGuesses === 1 ? 'guess' : 'guesses'}</strong>
            </p>

            <button onClick={handleRestart}>Restart game</button>

        </Banner>
    )
}

export default PositiveBanner;