import React from 'react';

function Banner({gameStatus, answer, guesses, handleRestart}) {

    return (
        <>
            {gameStatus === 'won' && (
                <div className='happy banner'>
                    <p>
                        <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>
                    </p>
                    <button onClick={handleRestart}>Restart game</button>
                </div>
            )}

            {gameStatus === 'lost' && (
                <div className='sad banner'>
                    <p>
                        Sorry, the correct answer is <strong>{answer}</strong>
                    </p>
                    <button onClick={handleRestart}>Restart game</button>
                </div>
            )}
        </>
    );
}

export default Banner;