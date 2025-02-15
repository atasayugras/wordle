export function checkGuess(guess, answer) {
    if (!guess) return null;

    const guessChars = [...guess.toUpperCase()];
    const answerChars = [...answer.toUpperCase()];
    const result = Array(5).fill(null);

    // Step 1: Look for correct letters
    guessChars.forEach((char, i) => {
        if (char === answerChars[i]) {
            result[i] = {
                letter: char,
                status: 'correct'
            };
            answerChars[i] = 'CHECKED';
            guessChars[i] = 'CHECKED';
        }
    });

    // Step 2: Look for misplaced letters
    guessChars.forEach((char, i) => {
        if (char === 'CHECKED') return;

        const foundPosition = answerChars.indexOf(char);
        result[i] = {
            letter: char,
            status: foundPosition >= 0 ? 'misplaced' : 'incorrect'
        };

        if (foundPosition >= 0) {
            answerChars[foundPosition] = 'CHECKED';
        }
    });

    return result;
}


// For the Keyboard component
export function getStatusByLetter(guesses, answer) {

    const letterStatuses = {};

    guesses.forEach(guess => {
        const result = checkGuess(guess, answer);
        if (!result) return;

        result.forEach(({letter, status}) => {
            const currentStatus = letterStatuses[letter];

            if (!currentStatus ||
                status === 'correct' ||
                (currentStatus === 'incorrect' && status === 'misplaced')) {
                letterStatuses[letter] = status;
            }
        });
    });

    return letterStatuses;
}