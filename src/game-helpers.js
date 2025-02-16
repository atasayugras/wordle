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
    // Create our dictionary of letters
    const letterStatuses = {};

    // Process each guess one at a time
    for (let guess of guesses) {
        // Skip invalid guesses
        if (!guess) continue;

        // Convert guess and answer to uppercase arrays
        const guessLetters = guess.toUpperCase().split('');
        const answerLetters = answer.toUpperCase().split('');

        // Check each letter in the guess
        for (let i = 0; i < guessLetters.length; i++) {
            const letter = guessLetters[i];

            // Step 1: Is it in the correct position?
            if (letter === answerLetters[i]) {
                letterStatuses[letter] = 'correct';
                continue;  // Move to next letter
            }

            // Step 2: Is it in the word at all?
            if (answerLetters.includes(letter)) {
                // Only update if we haven't marked this letter as correct before
                if (letterStatuses[letter] !== 'correct') {
                    letterStatuses[letter] = 'misplaced';
                }
                continue;  // Move to next letter
            }

            // Step 3: If we haven't recorded this letter yet, mark it as incorrect
            if (!letterStatuses[letter]) {
                letterStatuses[letter] = 'incorrect';
            }
        }
    }

    return letterStatuses;
}