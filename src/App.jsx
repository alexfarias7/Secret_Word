import "./App.css";

import { useCallback, useEffect, useState } from "react";

import { wordsList } from "./data/word";

import StartScreen from "./components/Startscreen";
import Game from "./components/Game";
import GameOver from "./components/End";

const stage = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessQty = 3;

function App() {
  const [GameStage, setGameStage] = useState(stage[0].name);
  const [Word, setWord] = useState(wordsList);

  const [PickedWord, setPickedWord] = useState("");
  const [PickedCategory, setPickedCategory] = useState("");
  const [Letters, setLetters] = useState([]);

  const [GuessedLetters, setGuessedLetters] = useState([]);
  const [WrongLetters, setWrongLetters] = useState([]);
  const [Guesses, setGuesses] = useState(guessQty);
  const [Score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //* pegando uma categoria radomicamente
    const categories = Object.keys(Word);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //* pegando uma palavra randomicamente
    const word =
      Word[category][Math.floor(Math.random() * Word[category].length)];

    return { word, category };
  }, [Word]);

  //*começa o jogo
  const startGame = useCallback(() => {
    clearLetterStates();
    //* escollhendo a palavra e a categoria
    const { word, category } = pickWordAndCategory();

    //* criando um array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //* pegando o estados
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stage[1].name);
  }, [pickWordAndCategory]);

  //* processa a letra do input

  const verifyletter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      GuessedLetters.includes(normalizedLetter) ||
      WrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (Letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (Guesses <= 0) {
      clearLetterStates();
      setGameStage(stage[2].name);
    }
  }, [Guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(Letters)];
    if (GuessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));

      startGame();
    }
  }, [GuessedLetters, Letters, startGame]);

  //* reinicia o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessQty);
    setGameStage(stage[0].name);
  };
  return (
    <div className="App">
      {GameStage === "start" && <StartScreen startGame={startGame} />}
      {GameStage === "game" && (
        <Game
          verifyletter={verifyletter}
          PickedWord={PickedWord}
          PickedCategory={PickedCategory}
          Letters={Letters}
          GuessedLetters={GuessedLetters}
          Guesses={Guesses}
          Score={Score}
          WrongLetters={WrongLetters}
        />
      )}
      {GameStage === "end" && <GameOver retry={retry} score={Score} />}
    </div>
  );
}

export default App;
