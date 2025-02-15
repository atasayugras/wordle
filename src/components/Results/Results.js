import GuessRow from "../GuessRow";
import {range} from "/src/utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Results({guesses, answer}) {
    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
                <GuessRow key={num} guess={guesses[num]} guesses={guesses} answer={answer}/>
            ))}
        </div>
    )

}

export default Results;