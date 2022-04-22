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

function App() {
  const [GameStage, setGameStage] = useState(stage[0].name);
  const [Word, setWord] = useState(wordsList);

  const [PickedWord, setPickedWord] = useState("");
  const [PickedCategory, setPickedCategory] = useState("");
  const [Letters, setLetters] = useState([]);

  const [GuessedLetters, setGuessedLetters] = useState([]);
  const [WrongLetters, setWrongLetters] = useState([]);
  const [Guesses, setGuesses] = useState(3);
  const [Score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    //* pegando uma categoria radomicamente
    const categories = Object.keys(Word);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //* pegando uma palavra randomicamente
    const word =
      Word[category][Math.floor(Math.random() * Word[category].length)];

    return { word, category };
  };

  //*começa o jogo
  const startGame = () => {
    //* escollhendo a palavra e a categoria
    const { word, category } = pickWordAndCategory();

    //* criando um array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //* pegando o estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    console.log(word, category, "  ", wordLetters);
    setGameStage(stage[1].name);
  };

  //* processa a letra do input
  const verifyletter = (letters) => {
    console.log(letters);
  };

  //* reinicia o jogo
  const retry = () => {
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
      {GameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
