import { useState, useEffect } from "react";

export default function App () {
  const [randomNumber, setRandomNumber] = useState(generateRandom());
  const [guess, setGuess] = useState("");
  const [lives, setLives] = useState(7);
  const [feedback, setFeedback] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    if (gameOver || guess === "") return;

    const numGuess = Number(guess);
    if (numGuess < 1 || numGuess > 100) {
      setFeedback("Please enter a number between 1 and 100");
      return;
    }

    setPreviousGuesses([...previousGuesses, numGuess]);

    if (numGuess === randomNumber) {
      setFeedback(`🎉 Correct! The number was ${randomNumber}`);
      setGameOver(true);
    } else {
      setLives(lives - 1);
      setFeedback(numGuess > randomNumber ?  "Too High!" : "Too Low!");
    }

    if (lives - 1 === 0 && numGuess !== randomNumber) {
      setFeedback(`😢 Game Over! The number was ${randomNumber}`);
      setGameOver(true);
    }

    setGuess("");
  };

  const resetGame = () => {
    setRandomNumber(generateRandom());
    setGuess("");
    setLives(7);
    setFeedback("");
    setPreviousGuesses([]);
    setGameOver(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Guess The Number</h1>
        <p className="text-gray-800 mb-2">I'm thinking of a number between 1 and 100.</p>
        <p className="text-red-600 mb-4">You have {lives} lives left.</p>

        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your guess"
          disabled={gameOver}
        />

        <button
          onClick={handleGuess}
          disabled={gameOver}
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 disabled:bg-gray-400"
        >
          Submit Guess
        </button>

        <button
          onClick={resetGame}
          className="ml-2 bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
        >
          Restart
        </button>

        {feedback && (
          <p className="mt-4 text-lg font-semibold text-indigo-700">{feedback}</p>
        )}

        <div className="mt-4">
          <p className="font-medium text-gray-700">Previous guesses:</p>
          <p className="text-gray-600">
            {previousGuesses.length > 0 ? previousGuesses.join(", ") : "None"}
          </p>
        </div>
      </div>
    </div>
  );
}



// export default App;
