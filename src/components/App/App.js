import React from "react";
import Game from '../Game';
import Header from '../Header';

function App() {
    const [gameKey, setGameKey] = React.useState(1);

    function handleRestart() {
        setGameKey(prevKey => prevKey + 1);
    }

    return (
        <div className="wrapper">
            <Header/>
            <div className="game-wrapper">
                <Game
                    key={gameKey}
                    handleRestart={handleRestart}
                />
            </div>
        </div>
    );
}

export default App;
