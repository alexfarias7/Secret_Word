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
  const [GameStage, setGameStage] = useState(stage[0].name)
  const [Word, setWord] = useState(wordsList)
  console.log(Word)

  return (
    <div className="App">
      {GameStage === 'start' && <StartScreen/>}
      {GameStage === 'game' && <Game/>}
      {GameStage === 'end' && <GameOver/>}
    </div>
  );
}

export default App;
