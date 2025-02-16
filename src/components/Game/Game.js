import React from 'react';
import {sample} from '../../utils';
import {WORDS} from '../../data';
import Input from '../Input';
import Results from '../Results';
import PositiveBanner from "../PositiveBanner";
import NegativeBanner from "../NegativeBanner";
import Keyboard from "../Keyboard";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";


function Game({handleRestart}) {
    const [answer, setAnswer] = React.useState(() => sample(WORDS));
// To make debugging easier, we'll log the solution in the console.
    console.info({answer});

    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState(`running`);

    //Input
    function handleSubmitGuess(guess) {
        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);

        // Update game status after new guess
        if (guess === answer) {
            setGameStatus(`won`);
        } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lost');
        }
    }

    return <>
        {gameStatus === 'won' && (  // Only show banner when game is won or lost
            <PositiveBanner
                numOfGuesses={guesses.length}
                handleRestart={handleRestart}
            />
        )}
        {gameStatus === 'lost' && (
            <NegativeBanner
                answer={answer}
                handleRestart={handleRestart}
            />
        )}
            <Results
                guesses={guesses}
                answer={answer}
            />
            <Input
                handleSubmitGuess={handleSubmitGuess}
                gameStatus={gameStatus}
            />
            <Keyboard guesses={guesses} answer={answer}/>
    </>
}

export default Game;
