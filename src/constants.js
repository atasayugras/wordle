export const NUM_OF_GUESSES_ALLOWED = 4;
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// First row: 0-9 (10 letters)
// Second row: 10-18 (9 letters)
// Third row: 19-25 (7 letters)
export const ROWS = [
    LETTERS.slice(0, 10),
    LETTERS.slice(10, 19),
    LETTERS.slice(19)
];