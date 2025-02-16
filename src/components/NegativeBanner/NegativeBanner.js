import React from 'react';
import Banner from '../Banner';

function NegativeBanner({answer, handleRestart}) {
    return (
        <Banner variant='sad'>

            <p>
                Sorry, the correct answer is <strong>{answer}</strong>
            </p>

            <button onClick={handleRestart}>Restart game</button>

        </Banner>
    )
}

export default NegativeBanner;