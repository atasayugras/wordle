import React from "react";

function Input({handleSubmitGuess, gameStatus}) {
    const [guess, setGuess] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitGuess(guess);
        setGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">
                Enter guess:
            </label>

            <input
                required
                disabled={gameStatus !== 'running'}
                id="guess-input"
                pattern="[a-zA-Z]{5}"
                maxLength={5}
                title="5 letter word"
                type="text"
                placeholder="Enter guess"
                value={guess}
                onChange={event => {
                    const nextGuess = event.target.value.toUpperCase();
                    setGuess(nextGuess);
                }}
            />
        </form>
    )
}

export default Input;